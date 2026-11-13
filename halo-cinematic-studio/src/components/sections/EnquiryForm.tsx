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
  studioPackages,
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
  if (!values.category && !values.packageSlug) {
    errors.category = "Please select an event category or package.";
  }
  if (!values.packageSlug && values.message.trim().length < 5) {
    errors.message =
      "Please select a package above or write a brief note about your enquiry.";
  }
  return errors;
}

const inputBase =
  "w-full rounded-xl border border-[#D8CFC1] bg-[#EEE9DF]/40 px-4 py-3 text-sm font-normal text-[#171716] placeholder:text-[#716B64]/70 " +
  "outline-none transition-all duration-200 focus:border-[#D71920] focus:ring-2 focus:ring-[#D71920]/15 aria-[invalid=true]:border-[#D71920] aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-[#D71920]/20";

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

  const availablePackages = useMemo(() => {
    if (values.category && values.category !== "custom") {
      return getPackagesByCategory(values.category);
    }
    return studioPackages;
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
      packageSlug: "",
    }));
    if (errors.category) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.category;
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
    if (errors.packageSlug || errors.category) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.packageSlug;
        delete next.category;
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
      ? `${selectedPackage.name} (${selectedPackage.priceDisplay})`
      : "Custom / Quote Needed";

    const lines = [
      "Hello HALO CINEMATIC STUDIO!",
      "",
      "Package & Booking Enquiry",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Event Category: ${categoryLabel}`,
      `Selected Package: ${packageLabel}`,
      `Preferred Date: ${values.date || "To be discussed"}`,
      ...(values.location.trim()
        ? [`Location / Venue: ${values.location.trim()}`]
        : []),
      `Message: ${
        values.message.trim() ||
        "Please share availability and booking steps for the selected package."
      }`,
    ];

    const url = whatsappUrl(lines.join("\n"));
    setSubmittedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[24px] border border-[#D8CFC1] bg-[#FAF7F1] p-6 shadow-xs sm:p-9"
    >
      <div className="border-b border-[#D8CFC1] pb-4">
        <QueryParamSync name="category" onValue={syncCategory} />
        <QueryParamSync name="package" onValue={syncPackage} />
        <p className="chip-eyebrow">WhatsApp Package Enquiry</p>
        <p className="mt-2 text-sm text-[#716B64]">
          Choose your event category and package tier below to send a formatted WhatsApp enquiry directly to our studio team.
        </p>
      </div>

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
                "appearance-none pr-10",
                values.category ? "text-[#141414]" : "text-[#625C5D]/70",
              )}
            >
              <option value="">Select event type</option>
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
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-[#625C5D]"
              aria-hidden
            />
          </div>
        </Field>

        <Field
          id={fid("packageSlug")}
          label="Select Package"
          error={errors.packageSlug}
        >
          <div className="relative">
            <select
              id={fid("packageSlug")}
              name="package"
              value={values.packageSlug}
              onChange={(e) => handlePackageChange(e.target.value)}
              disabled={values.category === "custom"}
              aria-invalid={Boolean(errors.packageSlug)}
              className={cn(
                inputBase,
                "appearance-none pr-10 disabled:cursor-not-allowed disabled:bg-[#FFF1F2] disabled:text-[#625C5D]",
                values.packageSlug ? "text-[#141414]" : "text-[#625C5D]/70",
              )}
            >
              <option value="">
                {values.category === "custom"
                  ? "Custom quote requested"
                  : "Choose a package (or custom quote)"}
              </option>
              {availablePackages.map((pkg) => (
                <option key={pkg.slug} value={pkg.slug}>
                  {pkg.name} — {pkg.priceDisplay}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-[#625C5D]"
              aria-hidden
            />
          </div>
        </Field>
      </div>

      {/* Live selected package preview card */}
      {selectedPackage ? (
        <div className="rounded-2xl border border-[rgba(217,11,23,0.22)] bg-[#FFF1F2] p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[rgba(217,11,23,0.16)] pb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#141414]">
              <PackageCheck className="size-4 text-[#E50919]" aria-hidden />
              <span>{selectedPackage.name}</span>
            </div>
            <span
              style={{ fontFamily: "var(--font-playfair), serif" }}
              className="text-lg font-semibold text-[#E50919]"
            >
              {selectedPackage.priceDisplay}
            </span>
          </div>
          <ul className="mt-3 grid gap-1.5 text-xs text-[#625C5D] sm:grid-cols-2">
            {selectedPackage.highlights.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-3.5 shrink-0 text-[#E50919]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

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

      <Field
        id={fid("message")}
        label={
          selectedPackage
            ? "Additional Notes (Optional)"
            : "Your Message / Requirements"
        }
        required={!selectedPackage}
        error={errors.message}
      >
        <textarea
          id={fid("message")}
          name="message"
          rows={4}
          required={!selectedPackage}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${fid("message")}-err` : undefined}
          placeholder="Tell us about your event schedule, preferred shoot days, extra frames, or custom requests..."
          className={cn(inputBase, "min-h-[110px] resize-y")}
        />
      </Field>

      <button
        type="submit"
        className="btn-grad inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-white shadow-sm"
      >
        <span>Send Enquiry via WhatsApp</span>
        <ArrowRight className="size-4" />
      </button>

      {submittedUrl ? (
        <div
          role="status"
          className="flex flex-col gap-2 rounded-xl border border-[#E50919]/30 bg-[#FFF1F2] p-4 text-sm text-[#141414]"
        >
          <div className="flex items-start gap-2.5 font-semibold">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-[#E50919]"
              aria-hidden
            />
            <span>
              Your package enquiry is ready to send on WhatsApp. Submitting
              opens a prefilled chat — our studio will reply to confirm date
              availability.
            </span>
          </div>
          <a
            href={submittedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pl-6 text-xs font-semibold text-[#141414] underline underline-offset-4 hover:text-[#E50919]"
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
      <label
        htmlFor={id}
        className="text-xs font-semibold text-[#141414]"
      >
        {label}
        {required ? <span className="text-[#E50919]"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-err`}
          role="alert"
          className="text-xs font-medium text-[#B50812]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
