"use client";

import Link from "next/link";

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[#0F172A]/[0.04] ${className}`}>
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" viewBox="0 0 200 200" preserveAspectRatio="none">
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

function SectionTag({ index, total, children }: { index: string; total: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">
        {index}/{total}
      </span>
      <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        {children}
      </span>
    </div>
  );
}

export default function ProjectsPage() {
  const projects = [
    { name: "Riverside Residency", type: "Residential · G+12", year: "2024" },
    { name: "Horizon Business Park", type: "Commercial · G+8", year: "2023" },
    { name: "Sundara Bridge Retrofit", type: "Infrastructure", year: "2023" },
    { name: "Greenfield Township", type: "Residential Layout", year: "2022" },
    { name: "Metro Station Upgrade", type: "Infrastructure", year: "2022" },
    { name: "Ocean View Apartments", type: "Residential · G+15", year: "2021" },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#0F172A]">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="projects-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0H40V40" fill="none" stroke="#0F172A" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#projects-grid)" />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-wide text-slate-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
            Projects
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-slate-600">
            A selection of projects delivered with structural integrity and precision.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTag index="01" total="01">All Projects</SectionTag>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Link
                key={p.name}
                href="/projects"
                className="group overflow-hidden rounded-2xl border border-slate-900/10 bg-white transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImagePlaceholder label={`Project ${i + 1}`} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display text-base font-semibold">{p.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                      {p.type}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-400">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}