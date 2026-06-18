"use client";

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

export default function AboutSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-slate-900/10 shadow-xl">
          <ImagePlaceholder label="Engineer Photo" className="h-full w-full" />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">01/04</span>
            <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">About</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Providing reliable structural expertise, project after project.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
            With over a decade in structural design and on-site execution, I help
            architects, builders, and homeowners turn drawings into structures that
            stand safely for generations — combining rigorous calculation with
            practical, buildable detailing.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 max-w-md">
            {["B.E. Civil Engineering", "Licensed Structural Engineer", "IS Code Compliance", "Seismic Design Expertise"].map(
              (item: string) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C2410C]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              )
            )}
          </ul>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-medium text-[#0F172A] underline-offset-4 hover:underline"
          >
            More about my background
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}