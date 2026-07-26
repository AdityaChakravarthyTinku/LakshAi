import { useEffect, useId, useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "./common/Button.jsx";
import {
  serviceOptions,
  engagementOptions,
  contactInfo,
} from "../data/siteContent.js";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

const INITIAL_FORM = {
  fullName: "",
  workEmail: "",
  companyName: "",
  phone: "",
  interestedService: "",
  engagementModel: "",
  message: "",
  consent: false,
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm({ preset }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | unconfigured
  const ids = {
    fullName: useId(),
    workEmail: useId(),
    companyName: useId(),
    phone: useId(),
    interestedService: useId(),
    engagementModel: useId(),
    message: useId(),
    consent: useId(),
  };

  useEffect(() => {
    if (!preset || (!preset.service && !preset.engagement)) return;
    setForm((prev) => ({
      ...prev,
      interestedService: preset.service || prev.interestedService,
      engagementModel: preset.engagement || prev.engagementModel,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset?.nonce]);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.workEmail.trim()) {
      nextErrors.workEmail = "Work email is required.";
    } else if (!isValidEmail(form.workEmail.trim())) {
      nextErrors.workEmail = "Enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please share a short project message.";
    if (!form.consent) nextErrors.consent = "Please confirm consent to be contacted.";
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!CONTACT_ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
    }
  }

  const fieldBaseClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#171126] placeholder:text-[#5F5A6D]/60 focus-ring transition-colors";

  function fieldClass(field) {
    return `${fieldBaseClass} ${
      errors[field] ? "border-red-400" : "border-[#E8E1F4] focus:border-[#A78BFA]"
    }`;
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.fullName} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Full name
          </label>
          <input
            id={ids.fullName}
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${ids.fullName}-error` : undefined}
            className={fieldClass("fullName")}
          />
          {errors.fullName && (
            <p id={`${ids.fullName}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.workEmail} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Work email
          </label>
          <input
            id={ids.workEmail}
            type="email"
            autoComplete="email"
            value={form.workEmail}
            onChange={(e) => updateField("workEmail", e.target.value)}
            aria-invalid={Boolean(errors.workEmail)}
            aria-describedby={errors.workEmail ? `${ids.workEmail}-error` : undefined}
            className={fieldClass("workEmail")}
          />
          {errors.workEmail && (
            <p id={`${ids.workEmail}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
              <AlertCircle size={14} aria-hidden="true" />
              {errors.workEmail}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={ids.companyName} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Company name
          </label>
          <input
            id={ids.companyName}
            type="text"
            autoComplete="organization"
            value={form.companyName}
            onChange={(e) => updateField("companyName", e.target.value)}
            className={fieldClass("companyName")}
          />
        </div>

        <div>
          <label htmlFor={ids.phone} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Phone number <span className="font-normal text-[#5F5A6D]">(optional)</span>
          </label>
          <input
            id={ids.phone}
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={fieldClass("phone")}
          />
        </div>

        <div>
          <label htmlFor={ids.interestedService} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Interested service
          </label>
          <select
            id={ids.interestedService}
            value={form.interestedService}
            onChange={(e) => updateField("interestedService", e.target.value)}
            className={fieldClass("interestedService")}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={ids.engagementModel} className="mb-1.5 block text-sm font-semibold text-[#171126]">
            Preferred engagement model
          </label>
          <select
            id={ids.engagementModel}
            value={form.engagementModel}
            onChange={(e) => updateField("engagementModel", e.target.value)}
            className={fieldClass("engagementModel")}
          >
            <option value="">Select an engagement model</option>
            {engagementOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={ids.message} className="mb-1.5 block text-sm font-semibold text-[#171126]">
          Project message
        </label>
        <textarea
          id={ids.message}
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${ids.message}-error` : undefined}
          className={fieldClass("message")}
        />
        {errors.message && (
          <p id={`${ids.message}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={ids.consent}
            type="checkbox"
            checked={form.consent}
            onChange={(e) => updateField("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? `${ids.consent}-error` : undefined}
            className="focus-ring mt-1 h-4 w-4 shrink-0 rounded border-[#E8E1F4] text-[#7C3AED]"
          />
          <label htmlFor={ids.consent} className="text-sm text-[#5F5A6D]">
            I consent to Laksh AI contacting me about my inquiry.
          </label>
        </div>
        {errors.consent && (
          <p id={`${ids.consent}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
            <AlertCircle size={14} aria-hidden="true" />
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-fit">
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Submit"
        )}
      </Button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 rounded-xl bg-[#0F9D83]/10 px-4 py-3 text-sm font-semibold text-[#0F9D83]">
            <CheckCircle2 size={18} aria-hidden="true" />
            Thanks — your message has been sent. We will be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            <AlertCircle size={18} aria-hidden="true" />
            Something went wrong sending your message. Please try again or
            email us directly at {contactInfo.email}.
          </p>
        )}
        {status === "unconfigured" && (
          <p className="rounded-xl border border-dashed border-[#E8E1F4] bg-[#F5F1FF] px-4 py-3 text-sm leading-relaxed text-[#5F5A6D]">
            The contact form backend has not been configured yet. Please
            contact us using the email address shown on this page:{" "}
            <a href={`mailto:${contactInfo.email}`} className="font-semibold text-[#7C3AED] underline">
              {contactInfo.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
