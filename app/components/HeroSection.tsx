"use client";

import Link from "next/link";

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
            Licensed Structural Engineer · 3+ yrs
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
              ["12+", "Projects Delivered"],
              ["3+ Yrs", "Field Experience"],
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
            <img
              src="/images/herosectionbuilding.jpeg"
              alt="Building"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}