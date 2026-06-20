import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "View MV Constructions portfolio of structural engineering projects including residential towers, schools, and commercial complexes across Pune and North Karnataka.",
  openGraph: {
    title: "Our Projects - MV Constructions",
    description: "High-rise residential towers, institutional buildings, and commercial complexes we've designed and detailed.",
    images: [
      { url: "/images/astoria_royals.jpeg" },
      { url: "/images/galaxy_ventures.jpeg" },
      { url: "/images/royal_court.jpeg" },
      { url: "/images/life_canvas.jpeg" },
    ],
  },
};

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
    { name: "Astoriya Royal", location: "Ravet, Pune", type: "Residential · 2B+G+25", image: "/images/astoria_royals.jpeg" },
    { name: "Royal Court", location: "Dange Chowk, Pune", type: "Residential · B+G+25", image: "/images/royal_court.jpeg" },
    { name: "Galaxy Ventures", location: "Sus, Pune", type: "Residential · 2B+G+25", image: "/images/galaxy_ventures.jpeg" },
    { name: "Life Canvas", location: "Mamurdi, Pune", type: "Residential · B+G+18", image: "/images/life_canvas.jpeg" },
    { name: "Pawar Apartment", location: "Ravet, Pune", type: "Residential · G+10", image: null },
    { name: "Yashaswi School", location: "Chinchwad, Pune", type: "Institutional · G+5", image: null },
    { name: "Commercial Complex", location: "Chikhli, Pune", type: "Commercial · B+G+4", image: null },
    { name: "Narayan Gawari Bungalow", location: "Moi", type: "Residential · 2 Floors", image: null },
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
            High-rise residential towers, institutional buildings, and commercial
            complexes — designed and structurally detailed across Pune and North Karnataka.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTag index="01" total="01">All Projects</SectionTag>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <div
                key={p.name}
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
                    <p className="mt-0.5 text-xs text-slate-400">{p.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 