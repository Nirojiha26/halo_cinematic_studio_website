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
import { Button } from "@/components/ui/Button";

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
  "w-full rounded-card border border-line-strong bg-canvas px-3.5 py-3 text-sm font-medium text-ink placeholder:font-normal placeholder:text-subtle " +
  "outline-none transition-[border-color,box-shadow] focus:border-ink focus:ring-1 focus:ring-ink aria-[invalid=true]:border-brand aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-brand/30";

/**
 * Interactive WhatsApp enquiry form with live Event Category & Package selection
 * and automatic query-param prefill (?category=...&package=...).
 */
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
    () => (values.packageSlug ? getPackageBySlug(values.packageSlug) : undefined),
    [values.packageSlug],
  );

  const idPrefix = useId();
  const fid = (k: keyof Values) => `${idPrefix}-${k}`;

  function clearFeedback(keys: (keyof Values)[]) {
    setErrors((prev) => {
      let changed = false;
      const next = { ...prev };
      for (const k of keys) {
        if (next[k]) {
          delete next[k];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
    if (submittedUrl) setSubmittedUrl(null);
  }

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    clearFeedback([key]);
  }

  function handleCategoryChange(nextCategory: Values["category"]) {
    setValues((v) => {
      const keepPkg =
        nextCategory &&
        nextCategory !== "custom" &&
        v.packageSlug &&
        getPackageBySlug(v.packageSlug)?.category === nextCategory;
      return {
        ...v,
        category: nextCategory,
        packageSlug: keepPkg ? v.packageSlug : "",
      };
    });
    clearFeedback(["category", "packageSlug"]);
  }

  function handlePackageChange(nextSlug: string) {
    const pkg = getPackageBySlug(nextSlug);
    setValues((v) => ({
      ...v,
      packageSlug: nextSlug,
      category: pkg ? pkg.category : v.category,
    }));
    clearFeedback(["packageSlug", "category", "message"]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstKey = Object.keys(nextErrors)[0] as keyof Values;
      document.getElementById(fid(firstKey))?.focus();
      return;
    }

    const categoryLabel =
      values.category === "custom"
        ? "Custom / Other Studio Enquiry"
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
      className="grid gap-5 rounded-card border border-line-strong border-t-[3px] border-t-brand bg-canvas p-6 shadow-[0_24px_60px_-38px_rgba(10,10,11,0.18)] sm:p-9"
    >
      <div className="border-b border-line pb-4">
        <QueryParamSync name="category" onValue={syncCategory} />
        <QueryParamSync name="package" onValue={syncPackage} />
        <p className="eyebrow">WhatsApp Package Enquiry</p>
        <p className="mt-2 text-sm text-body">
          Choose your event category and package tier below to send a formatted WhatsApp enquiry directly to our studio
          team.
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
                values.category
                  ? "font-medium text-ink"
                  : "font-normal text-subtle",
              )}
            >
              <option value="">Select event type</option>
              {packageCategories.map((cat) => (
                <option key={cat.slug} value={cat.slug} className="text-ink">
                  {cat.label}
                </option>
              ))}
              <option value="custom" className="text-ink">
                Custom Shoot / Music Video / Edit
              </option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink"
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
                "appearance-none pr-10 disabled:cursor-not-allowed disabled:bg-paper disabled:text-muted",
                values.packageSlug
                  ? "font-medium text-ink"
                  : "font-normal text-subtle",
              )}
            >
              <option value="">
                {values.category === "custom"
                  ? "Custom quote requested"
                  : "Choose a package (or custom quote)"}
              </option>
              {availablePackages.map((pkg) => (
                <option key={pkg.slug} value={pkg.slug} className="text-ink">
                  {pkg.name} — {pkg.priceDisplay}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-ink"
              aria-hidden
            />
          </div>
        </Field>
      </div>

      {/* Live selected package preview card */}
      {selectedPackage ? (
        <div className="rounded-card border border-brand/35 bg-paper p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-ink uppercase">
              <PackageCheck className="size-4 text-brand" aria-hidden />
              <span>{selectedPackage.name}</span>
            </div>
            <span className="font-display text-lg font-black text-brand">
              {selectedPackage.priceDisplay}
            </span>
          </div>
          <ul className="mt-3 grid gap-1.5 text-xs text-body sm:grid-cols-2">
            {selectedPackage.highlights.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand" aria-hidden />
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
            className={cn(
              inputBase,
              values.date ? "font-medium text-ink" : "font-normal text-subtle",
            )}
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
          className={cn(inputBase, "min-h-[116px] resize-y")}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        className="mt-1 w-full sm:w-auto"
        icon={<ArrowRight className="size-4" />}
      >
        Send Enquiry via WhatsApp
      </Button>

      {submittedUrl ? (
        <div
          role="status"
          className="flex flex-col gap-2 rounded-card border border-[#15803d]/30 bg-[#f0fdf4] p-4 text-sm text-[#14532d]"
        >
          <div className="flex items-start gap-2.5 font-semibold">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-[#16a34a]"
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
            className="inline-flex items-center gap-1.5 pl-6 text-xs font-bold text-ink underline underline-offset-4 hover:text-brand"
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
        className="text-[11px] font-bold tracking-[0.12em] text-ink uppercase"
      >
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-err`}
          role="alert"
          className="text-xs font-semibold text-brand-deep"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
