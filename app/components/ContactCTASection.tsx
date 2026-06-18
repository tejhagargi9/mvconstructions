"use client";

import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">04/04</span>
          <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Contact</span>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white px-8 py-14 text-center shadow-[0_30px_60px_-25px_rgba(15,23,42,0.2)] sm:px-16">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M0 0H30V30" fill="none" stroke="#0F172A" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#cta-grid)" />
          </svg>
          <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a structure in mind?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-slate-600">
            Let&apos;s talk through your project&apos;s requirements — site conditions,
            timelines, and code compliance — before the first drawing is made.
          </p>
          <Link
            href="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B]"
          >
            Schedule a Consultation
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}