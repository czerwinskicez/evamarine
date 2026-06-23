"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Nie udało się wysłać wiadomości.");
      }

      setState("success");
      setFeedback("Dziękujemy. Wiadomość została wysłana.");
      setForm(initialForm);
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Nie udało się wysłać wiadomości.");
    }
  }

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" aria-label="Formularz kontaktowy">
      <div className="hidden">
        <label htmlFor="company">Firma</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Imię" id="firstName" value={form.firstName} onChange={(value) => updateField("firstName", value)} required />
        <Field label="Nazwisko" id="lastName" value={form.lastName} onChange={(value) => updateField("lastName", value)} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="E-mail" id="email" type="email" value={form.email} onChange={(value) => updateField("email", value)} required />
        <Field label="Telefon" id="phone" type="tel" value={form.phone} onChange={(value) => updateField("phone", value)} />
      </div>
      <Field label="Adres lub port jednostki" id="address" value={form.address} onChange={(value) => updateField("address", value)} />
      <Field label="Temat" id="subject" value={form.subject} onChange={(value) => updateField("subject", value)} required />

      <label className="grid gap-2 text-sm font-medium text-navy" htmlFor="message">
        Wiadomość
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="field min-h-36 resize-y"
          placeholder="Opisz jacht, zakres prac, lokalizację, szablony i preferowany termin."
        />
      </label>

      <button type="submit" className="btn btn-primary justify-center" disabled={state === "sending"}>
        {state === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>

      {feedback ? (
        <p
          role="status"
          className={state === "success" ? "text-sm font-medium text-green-700" : "text-sm font-medium text-red-700"}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  id: keyof typeof initialForm;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-navy" htmlFor={id}>
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field"
      />
    </label>
  );
}
