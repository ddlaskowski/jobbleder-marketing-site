"use client";

import { FormEvent, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  message: string;
  accept: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  mobile: "",
  message: "",
  accept: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [invalidFields, setInvalidFields] = useState<(keyof FormState)[]>([]);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function fieldError(fields: (keyof FormState)[], message: string) {
    setError(message);
    setInvalidFields(fields);
    setSuccess(false);
    // Commit the description/invalid state before moving focus to its control.
    requestAnimationFrame(() => {
      const control = formRef.current?.elements.namedItem(fields[0]);
      if (control instanceof HTMLElement) control.focus();
    });
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (!invalidFields.includes(key)) return;
    const next = { ...form, [key]: value };
    const emailControl = formRef.current?.elements.namedItem("email");
    const corrected = invalidFields.length > 1
      ? Boolean(next.email.trim() || next.mobile.trim())
      : key === "accept" ? next.accept
      : key === "email" ? emailControl instanceof HTMLInputElement && emailControl.validity.valid
      : Boolean(String(next[key]).trim());
    if (corrected) {
      setError("");
      setInvalidFields([]);
    }
  }

  function errorAttributes(field: keyof FormState) {
    return invalidFields.includes(field)
      ? { "aria-invalid": true as const, "aria-describedby": "contact-error" }
      : {};
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setInvalidFields([]);
    setSuccess(false);

    if (!form.name.trim()) {
      fieldError(["name"], "Skriv inn navn.");
      return;
    }

    if (!form.message.trim()) {
      fieldError(["message"], "Skriv inn melding.");
      return;
    }

    if (!form.email.trim() && !form.mobile.trim()) {
      fieldError(["email", "mobile"], "Legg inn e-post eller telefonnummer.");
      return;
    }

    if (!form.accept) {
      fieldError(["accept"], "Du må godta behandlingen av personopplysninger.");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        setError(data?.error ?? "Noe gikk galt. Prøv igjen.");
        return;
      }

      setSuccess(true);
      setForm(initialState);
    } catch {
      setError("Noe gikk galt. Prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Kontakt oss</h2>
      <p className="mt-3 text-gray-600">
        Har du spørsmål om Jobbleder? Send oss en melding.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} onInvalid={(event) => {
        const control = event.target as HTMLInputElement;
        if (control.name === "email") {
          event.preventDefault();
          fieldError(["email"], control.validationMessage);
        }
      }} className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-800">
            Navn
          </label>
          <input
            id="name"
            name="name"
            {...errorAttributes("name")}
            type="text"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-600"
            placeholder="Navnet ditt"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-800">
            E-post
          </label>
          <input
            id="email"
            name="email"
            {...errorAttributes("email")}
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-600"
            placeholder="din@epost.no"
          />
        </div>

        <div>
          <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-gray-800">
            Telefon
          </label>
          <input
            id="mobile"
            name="mobile"
            {...errorAttributes("mobile")}
            type="tel"
            value={form.mobile}
            onChange={(e) => updateField("mobile", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-600"
            placeholder="+47 ..."
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-800">
            Melding
          </label>
          <textarea
            id="message"
            name="message"
            {...errorAttributes("message")}
            rows={6}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-600"
            placeholder="Hvordan kan vi hjelpe deg?"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            id="accept"
            name="accept"
            {...errorAttributes("accept")}
            checked={form.accept}
            onChange={(e) => updateField("accept", e.target.checked)}
            className="mt-1"
          />
          <span>
            Jeg godtar behandlingen av mine personopplysninger for å bli kontaktet og få svar på henvendelsen min.
          </span>
        </label>

        {error && (
          <div id="contact-error" role={invalidFields.length ? undefined : "alert"} className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            Takk for meldingen! Vi kontakter deg snart.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sender..." : "Send melding"}
        </button>
      </form>
    </div>
  );
}
