"use client";

import { useState } from "react";

const CONTACT_EMAIL = "vaibhavmirje1606@gmail.com";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-[#C2410C]">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return [
    "w-full rounded-xl border bg-[#FAFAF8] px-4 py-3 text-sm text-[#0F172A] placeholder:text-slate-400",
    "outline-none transition-colors focus:border-[#0F172A]/40 focus:bg-white focus:ring-2 focus:ring-[#0F172A]/10",
    error ? "border-[#C2410C]/40" : "border-slate-900/10",
  ].join(" ");
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = ["Residential", "Commercial", "School / Institutional", "Hospital", "Structural Audit", "Other"];

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!form.email.trim()) e.email = "Enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Tell us a bit about your project";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    const subject = encodeURIComponent(
      `New inquiry${form.projectType ? `: ${form.projectType}` : ""} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nProject type: ${form.projectType || "—"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className={inputClass(errors.name)}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            className={inputClass(errors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)">
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 00000 00000"
            className={inputClass()}
          />
        </Field>
        <Field label="Project type">
          <select
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={`${inputClass()} appearance-none`}
          >
            <option value="">Select one</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" error={errors.message}>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about the site, scope, and timeline..."
          className={`${inputClass(errors.message)} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B] sm:w-auto"
      >
        Send message
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="font-mono text-[11px] text-slate-400">
        Opens your email app with the message pre-filled.
      </p>
    </form>
  );
}