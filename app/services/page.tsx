import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Structural design, foundation design, water tank design, site supervision, and drafting services for residential, commercial, and institutional buildings.",
  openGraph: {
    title: "Structural Engineering Services",
    description: "Comprehensive structural engineering services including RCC design, StaadPro analysis, and site coordination across Pune and North Karnataka.",
    images: [{ url: "/images/about_main_photo.jpeg" }],
  },
};

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

export default function ServicesPage() {
  const services = [
    {
      title: "Structural Design",
      desc: "Manual analysis and design of slabs, beams and columns for residential, commercial, school and hospital buildings.",
      icon: <path d="M4 20V8l8-5 8 5v12M4 20h16M9 20v-6h6v6" />,
    },
    {
      title: "Foundation Design",
      desc: "Design of isolated and combined footings tailored to soil conditions and structural loads.",
      icon: <path d="M3 20l6-14h6l6 14M7 20l5-12 5 12M9 16h6" />,
    },
    {
      title: "Water Tank Design",
      desc: "Manual calculations for underground and overhead water tanks as part of complete building design.",
      icon: <path d="M12 2c4 4 6 7 6 10a6 6 0 11-12 0c0-3 2-6 6-10z" />,
    },
    {
      title: "Structural Analysis & Modelling",
      desc: "Modelling in PlanWin, analysis in StaadPro and ETabs, with component design carried out in RCDC.",
      icon: <path d="M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5" />,
    },
    {
      title: "Site Supervision",
      desc: "Coordinating with site engineers and inspecting site work for compliance with the structural design provided.",
      icon: <path d="M12 2l9 4.9V17l-9 5-9-5V6.9L12 2zm0 5v10M7 9l5-2 5 2" />,
    },
    {
      title: "Drafting & Detailing",
      desc: "Drafting and scheduling of slabs, beams, columns, footings, water tanks, retaining walls and column link details.",
      icon: <path d="M9 12l2 2 4-4M5 12l5 0 5 0M5 8l5 0 5 0M5 16l5 0 5 0" />,
    },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#0F172A]">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0H40V40" fill="none" stroke="#0F172A" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#services-grid)" />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-wide text-slate-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
            Services
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What we provide
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-slate-600">
            Structural engineering services tailored to your project&apos;s specific needs.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTag index="01" total="01">Services</SectionTag>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-900/10 bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C2410C]/10 text-[#C2410C]">
                  <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}