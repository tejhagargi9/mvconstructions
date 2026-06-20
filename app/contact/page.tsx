import { Metadata } from "next";
import ContactForm from "./Form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MV Constructions for structural engineering consultation. Based in Chikodi, Belgaum, serving North Karnataka and Pune regions.",
  openGraph: {
    title: "Contact MV Constructions",
    description: "Reach out for structural engineering consultation, design inquiries, or site supervision services.",
    images: [{ url: "/images/about_main_photo.jpeg" }],
  },
};

export default function ContactPage() {
  const contactDetails = [
    {
      label: "Phone",
      value: "+91 91102 80249",
      href: "tel:+919110280249",
      icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
    },
    {
      label: "Email",
      value: "vaibhavmirje1606@gmail.com",
      href: "mailto:vaibhavmirje1606@gmail.com",
      icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    },
    {
      label: "Office",
      value: "Veer Savarkar Nagar, Chikodi, Belgaum, Karnataka 591201",
      href: "https://www.google.com/maps?q=16.4298914,74.5802539&z=17&hl=en",
      icon: <><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vaibhavmirje1699",
      href: "https://www.linkedin.com/in/vaibhavmirje1699",
      icon: <><path d="M4 4h16v16H4z" /><path d="M8 11v5M8 8v.5M12 16v-5M12 11c0-1.2 1-2 2-2s2 .8 2 2v5" /></>,
    },
  ];

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
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              Send a message
            </p>
            <ContactForm />
          </div>

          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              Reach us directly
            </p>
            <div className="space-y-4">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Office" || c.label === "LinkedIn" ? "_blank" : undefined}
                  rel={c.label === "Office" || c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
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
                src="https://maps.google.com/maps?q=16.4298914,74.5802539&z=17&output=embed"
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