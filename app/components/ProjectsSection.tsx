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

export default function ProjectsSection() {
  const projects = [
    { name: "Astoriya Royal", type: "Residential · 2B+G+25", location: "Ravet, Pune", image: "/images/astoria_royals.jpeg" },
    { name: "Galaxy Ventures", type: "Residential · 2B+G+25", location: "Sus, Pune", image: "/images/galaxy_ventures.jpeg" },
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">03/04</span>
              <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Projects</span>
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-medium text-[#0F172A] underline-offset-4 hover:underline"
          >
            View all projects
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p: { name: string; type: string; location: string; image: string | null }, i: number) => (
            <Link
              key={p.name}
              href="/projects"
              className="group overflow-hidden rounded-2xl border border-slate-900/10 bg-white transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <ImagePlaceholder label={`Project ${i + 1}`} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                )}
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                    {p.type}
                  </p>
                </div>
                <span className="font-mono text-xs text-slate-400">{p.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}