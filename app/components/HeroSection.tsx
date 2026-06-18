"use client";

import Link from "next/link";

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[#0F172A]/[0.04] ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id={`grid-${label}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 0 H20 V20" fill="none" stroke="#0F172A" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#grid-${label})`} />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-slate-400">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em]">{label}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:pb-28">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0H40V40" fill="none" stroke="#0F172A" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#hero-grid)" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-wide text-slate-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
            Licensed Structural Engineer · 12+ yrs
          </div>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[3.6rem]">
            Designing Structures.
            <br />
            Ensuring Safety.
            <br />
            <span className="text-[#C2410C]">Building Trust.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-slate-600">
            Expert structural engineering consultation for safe, economical, and
            code-compliant construction — reliable expertise that ensures durability
            and long-term performance on every project.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B]"
            >
              View Projects
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 px-6 py-3.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-slate-900/5"
            >
              Get a Consultation
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-slate-900/10 pt-6">
            {[
              ["120+", "Projects Delivered"],
              ["12 Yrs", "Field Experience"],
              ["0", "Structural Failures"],
            ].map((item: string[], idx: number) => (
              <div key={idx}>
                <dt className="font-display text-2xl font-semibold text-[#0F172A]">{item[0]}</dt>
                <dd className="mt-1 font-mono text-[10.5px] uppercase tracking-wide text-slate-500">
                  {item[1]}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-slate-900/10 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.25)]">
            <ImagePlaceholder label="Building Photo" className="h-full w-full" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-900/10 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] uppercase tracking-wide text-slate-500">
              Latest Completion
            </p>
            <p className="mt-1 font-display text-sm font-semibold">Horizon Business Park</p>
          </div>
        </div>
      </div>
    </section>
  );
}