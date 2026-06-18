"use client";

import { useState } from "react";
import Link from "next/link";

function SectionTag({ index, total, children }: { index: string; total: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">{index}/{total}</span>
      <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{children}</span>
    </div>
  );
}

const CONTACT_EMAIL = "contact@mvconstructions.com";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const projectTypes = ["Residential", "Commercial", "Structural Audit", "Site Consultation", "Other"];

  const contactDetails = [
    {
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    },
    {
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    },
    {
      label: "Office",
      value: "4th Cross, Industrial Layout, Hubballi, Karnataka 580029",
      href: "https://maps.google.com/?q=Hubballi+Karnataka",
      icon: <><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
    },
  ];

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
    <main className="bg-[#FAFAF8] text-[#0F172A]">
      <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 sm:pt-40">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0H40V40" fill="none" stroke="#0F172A" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="1200" height="500" fill="url(#contact-grid)" />
        </svg>
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-wide text-slate-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
            Contact
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-slate-600">
            Reach out for a consultation, a structural audit, or just to ask whether
            your idea is buildable. We typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.75rem] border border-slate-900/10 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.15)] sm:p-9">
            <SectionTag index="01" total="02">Send a message</SectionTag>

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
          </div>

          <div>
            <SectionTag index="02" total="02">Reach us directly</SectionTag>
            <div className="space-y-4">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Office" ? "_blank" : undefined}
                  rel={c.label === "Office" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-slate-900/10 bg-white p-5 transition-colors hover:border-[#C2410C]/30 hover:bg-[#C2410C]/[0.03]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F172A]/[0.05] text-[#0F172A]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
                      {c.label}
                    </span>
                    <span className="mt-0.5 block font-medium text-[#0F172A]">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white p-5">
              <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
                Office Hours
              </span>
              <dl className="mt-3 space-y-1.5 text-sm text-slate-700">
                <div className="flex justify-between">
                  <dt>Mon – Sat</dt>
                  <dd className="font-medium">9:00 AM – 6:30 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd className="font-medium text-slate-400">Closed</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-900/10 shadow-sm">
              <iframe
                title="Office location map"
                src="https://maps.google.com/maps?q=Hubballi,Karnataka&z=14&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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