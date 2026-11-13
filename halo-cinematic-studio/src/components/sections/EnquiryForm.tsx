"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  PackageCheck,
} from "lucide-react";
import { useCallback, useId, useMemo, useState, type FormEvent } from "react";
import { whatsappUrl } from "@/config/site";
import {
  getCategoryMeta,
  getPackageBySlug,
  getPackagesByCategory,
  isPackageCategorySlug,
  packageCategories,
  type PackageCategorySlug,
} from "@/data/packages";
import { cn } from "@/lib/utils";
import { QueryParamSync } from "@/components/shared/QueryParamSync";

type Values = {
  name: string;
  phone: string;
  category: PackageCategorySlug | "custom" | "";
  packageSlug: string;
  date: string;
  location: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 7) errors.phone = "Please enter a valid contact number.";
  if (!values.category) {
    errors.category = "Please select an event category.";
  }
  if (values.category && values.category !== "custom" && !values.packageSlug) {
    errors.packageSlug = "Please select a package for this category.";
  }
  if (values.message.trim().length < 5) {
    errors.message = "Please share your event requirements or message.";
  }
  return errors;
}

const inputBase =
  "w-full rounded-xl border border-[#D8CFC1] bg-white/70 px-4 py-3 text-sm font-normal text-[#171716] placeholder:text-[#716B64]/60 " +
  "outline-none transition-all duration-200 focus:border-[#D71920] focus:bg-white focus:ring-2 focus:ring-[#D71920]/15 " +
  "aria-[invalid=true]:border-[#D71920] aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#D71920]/20";

export function EnquiryForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    category: "",
    packageSlug: "",
    date: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const syncCategory = useCallback((raw: string) => {
    const normalized = raw.toLowerCase();
    if (isPackageCategorySlug(normalized)) {
      setValues((v) => ({
        ...v,
        category: normalized,
        packageSlug: "",
      }));
    }
  }, []);

  const syncPackage = useCallback((raw: string) => {
    const pkg = getPackageBySlug(raw.toLowerCase());
    if (pkg) {
      setValues((v) => ({
        ...v,
        category: pkg.category,
        packageSlug: pkg.slug,
      }));
    }
  }, []);

  // ONLY show packages belonging to the selected category
  const availablePackages = useMemo(() => {
    if (values.category && values.category !== "custom") {
      return getPackagesByCategory(values.category);
    }
    return [];
  }, [values.category]);

  const selectedPackage = useMemo(
    () => (values.packageSlug ? getPackageBySlug(values.packageSlug) : null),
    [values.packageSlug],
  );

  const idPrefix = useId();
  const fid = (field: string) => `${idPrefix}-${field}`;

  const update = <K extends keyof Values>(field: K, val: Values[K]) => {
    setValues((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleCategoryChange = (cat: Values["category"]) => {
    setValues((prev) => ({
      ...prev,
      category: cat,
      packageSlug: "", // Reset package when category changes
    }));
    if (errors.category || errors.packageSlug) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.category;
        delete next.packageSlug;
        return next;
      });
    }
  };

  const handlePackageChange = (slug: string) => {
    const pkg = getPackageBySlug(slug);
    setValues((prev) => ({
      ...prev,
      packageSlug: slug,
      category: pkg ? pkg.category : prev.category,
    }));
    if (errors.packageSlug) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.packageSlug;
        return next;
      });
    }
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const categoryLabel =
      values.category === "custom"
        ? "Custom Request"
        : values.category
          ? getCategoryMeta(values.category).label
          : "Not specified";

    const packageLabel = selectedPackage
      ? `${selectedPackage.name} • ${selectedPackage.priceDisplay}`
      : values.category === "custom"
        ? "Custom Quote Requested"
        : "Package to be discussed";

    const lines = [
      "📸 *HALO CINEMATIC STUDIO*",
      "*New Booking & Package Enquiry*",
      "────────────────────────────",
      "",
      "👤 *Client Details*",
      `• *Name:* ${values.name.trim()}`,
      `• *Phone:* ${values.phone.trim()}`,
      "",
      "💍 *Event Details*",
      `• *Category:* ${categoryLabel}`,
      `• *Package:* ${packageLabel}`,
      `• *Preferred Date:* ${values.date ? values.date : "To be discussed"}`,
      ...(values.location.trim()
        ? [`• *Location / Venue:* ${values.location.trim()}`]
        : []),
      "",
      "📝 *Client Message / Requirements:*",
      `"${values.message.trim()}"`,
      "",
      "────────────────────────────",
      "_Sent via halocinematicstudio.com_",
    ];

    const url = whatsappUrl(lines.join("\n"));
    setSubmittedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      id="booking"
      noValidate
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-[#D8CFC1] bg-[#FAF7F1] p-6 shadow-xs sm:p-8"
    >
      {/* Header with Get in Touch Eyebrow */}
      <div className="border-b border-[#D8CFC1]/70 pb-4">
        <QueryParamSync name="category" onValue={syncCategory} />
        <QueryParamSync name="package" onValue={syncPackage} />
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-5 h-[2px] bg-[#D71920]" aria-hidden />
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D71920]">
            Get in Touch
          </p>
        </div>
        <h3
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          className="text-xl sm:text-2xl font-normal text-[#171716] tracking-tight leading-snug"
        >
          Send WhatsApp Enquiry
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#716B64] leading-relaxed">
          Choose your event category and package tier below to send a formatted enquiry directly to our studio team.
        </p>
      </div>

      {/* Name and Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={fid("name")} label="Your Name" required error={errors.name}>
          <input
            id={fid("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${fid("name")}-err` : undefined}
            placeholder="Enter your name"
            className={inputBase}
          />
        </Field>

        <Field
          id={fid("phone")}
          label="Contact Number"
          required
          error={errors.phone}
        >
          <input
            id={fid("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${fid("phone")}-err` : undefined}
            placeholder="077 532 1978"
            className={inputBase}
          />
        </Field>
      </div>

      {/* Category and Filtered Package */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id={fid("category")}
          label="Event Category"
          required
          error={errors.category}
        >
          <div className="relative">
            <select
              id={fid("category")}
              name="category"
              required
              value={values.category}
              onChange={(e) =>
                handleCategoryChange(e.target.value as Values["category"])
              }
              aria-invalid={Boolean(errors.category)}
              aria-describedby={
                errors.category ? `${fid("category")}-err` : undefined
              }
              className={cn(
                inputBase,
                "appearance-none pr-10 cursor-pointer",
                values.category ? "text-[#171716]" : "text-[#716B64]/70",
              )}
            >
              <option value="">Select event category</option>
              {packageCategories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.label}
                </option>
              ))}
              <option value="custom">
                Custom Shoot / Music Video / Edit
              </option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-[#716B64]"
              aria-hidden
            />
          </div>
        </Field>

        <Field
          id={fid("packageSlug")}
          label="Select Package"
          required={Boolean(values.category && values.category !== "custom")}
          error={errors.packageSlug}
        >
          <div className="relative">
            <select
              id={fid("packageSlug")}
              name="package"
              value={values.packageSlug}
              onChange={(e) => handlePackageChange(e.target.value)}
              disabled={!values.category || values.category === "custom"}
              aria-invalid={Boolean(errors.packageSlug)}
              aria-describedby={
                errors.packageSlug ? `${fid("packageSlug")}-err` : undefined
              }
              className={cn(
                inputBase,
                "appearance-none pr-10",
                !values.category
                  ? "cursor-not-allowed bg-[#EEE9DF]/40 text-[#716B64]/60"
                  : values.category === "custom"
                    ? "cursor-not-allowed bg-[#EEE9DF]/40 text-[#716B64]"
                    : "cursor-pointer",
                values.packageSlug ? "text-[#171716]" : "text-[#716B64]/70",
              )}
            >
              {!values.category ? (
                <option value="">Select event category first</option>
              ) : values.category === "custom" ? (
                <option value="">Custom quote requested (specify below)</option>
              ) : (
                <>
                  <option value="">Choose a package...</option>
                  {availablePackages.map((pkg) => (
                    <option key={pkg.slug} value={pkg.slug}>
                      {pkg.name} — {pkg.priceDisplay}
                    </option>
                  ))}
                </>
              )}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-[#716B64]"
              aria-hidden
            />
          </div>
        </Field>
      </div>

      {/* Selected Package Details Preview Box */}
      {selectedPackage ? (
        <div
          role="region"
          aria-label="Selected package details"
          className="rounded-xl border border-[#D8CFC1] bg-[#EEE9DF]/50 p-4 transition-all duration-300"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CFC1]/60 pb-2.5">
            <div className="flex items-center gap-2">
              <PackageCheck className="size-4 text-[#D71920]" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D71920]">
                {selectedPackage.tierLabel}
              </p>
              <span className="text-[#716B64]">•</span>
              <p className="text-sm font-semibold text-[#171716]">
                {selectedPackage.name}
              </p>
            </div>
            <p className="text-sm font-bold text-[#D71920]">
              {selectedPackage.priceDisplay}
            </p>
          </div>
          {selectedPackage.subline ? (
            <p className="mt-2 text-xs text-[#716B64]">
              {selectedPackage.subline}
            </p>
          ) : null}
          <ul className="mt-2.5 grid gap-1.5 text-xs text-[#716B64] sm:grid-cols-2">
            {selectedPackage.highlights.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 size-3.5 shrink-0 text-[#D71920]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Date and Location */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={fid("date")} label="Event / Shoot Date">
          <input
            id={fid("date")}
            name="date"
            type="date"
            value={values.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputBase}
          />
        </Field>

        <Field id={fid("location")} label="Venue / Location">
          <input
            id={fid("location")}
            name="location"
            type="text"
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            placeholder="City or venue (optional)"
            className={inputBase}
          />
        </Field>
      </div>

      {/* Message / Requirements MUST BE REQUIRED */}
      <Field
        id={fid("message")}
        label="Your Message / Requirements"
        required
        error={errors.message}
      >
        <textarea
          id={fid("message")}
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${fid("message")}-err` : undefined
          }
          placeholder="Tell us about your event schedule, preferred shoot days, extra frames, or custom requests..."
          className={cn(inputBase, "min-h-[110px] resize-y")}
        />
      </Field>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#D71920] px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#b5141a] active:scale-[0.99] cursor-pointer"
      >
        <span>Send Enquiry via WhatsApp</span>
        <ArrowRight className="size-4" />
      </button>

      {/* Success Status Notice */}
      {submittedUrl ? (
        <div
          role="status"
          className="flex flex-col gap-2 rounded-xl border border-[#D71920]/30 bg-[#EEE9DF]/60 p-4 text-sm text-[#171716]"
        >
          <div className="flex items-start gap-2.5 font-semibold">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-[#D71920]"
              aria-hidden
            />
            <span>
              Your package enquiry is ready to send on WhatsApp. Submitting opens
              a prefilled chat — our studio will reply to confirm date availability.
            </span>
          </div>
          <a
            href={submittedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pl-6 text-xs font-semibold text-[#171716] underline underline-offset-4 hover:text-[#D71920]"
          >
            Didn&apos;t open automatically? Open WhatsApp now
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-[#171716]">
        {label}
        {required ? <span className="text-[#D71920]"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-err`}
          role="alert"
          className="text-xs font-medium text-[#D71920]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
