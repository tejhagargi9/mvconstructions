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

function SectionTag({ index, total, children, light = false }: { index: string; total: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">{index}/{total}</span>
      <span className={`h-px flex-1 max-w-[40px] ${light ? "bg-white/20" : "bg-slate-300"}`} />
      <span className={`font-mono text-xs uppercase tracking-[0.2em] ${light ? "text-slate-400" : "text-slate-500"}`}>
        {children}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const timeline = [
    { year: "2017–21", title: "B.E. in Civil Engineering", desc: "KLE Dr. M.S. Sheshgiri College of Engineering and Technology, Belgaum — 8.69 CGPA." },
    { year: "2020", title: "Site Engineer, Residential Project", desc: "Planning in AutoCAD, lineout works, and site supervision for excavation and foundation under Mr. Chandrakant M. Managutti." },
    { year: "2021–23", title: "M.Tech in Structural Engineering", desc: "Nitte Meenakshi Institute of Technology, Bangalore — 8.82 CGPA." },
    { year: "2022–23", title: "Internship, TRC Engineering (I) Pvt. Ltd", desc: "Studied IS code books and prepared framing plans for Manipal University Academic Block 5 in ETabs." },
    { year: "2023", title: "Structural Design Engineer, Pune", desc: "Worked under chartered structural engineer Avinash H. Hole for 2.5 years across 8+ high-rise residential, commercial, and school projects." },
    { year: "Present", title: "Independent Structural Design Engineer", desc: "Managing structural designs for commercial, residential, school, and hospital buildings across North Karnataka." },
  ];

  const credentials = [
    "M.Tech, Structural Engineering",
    "B.E. Civil Engineering",
    "IS Code Compliance (IS 456, IS 875)",
    "High-Rise Residential Design",
    "AutoCAD Certified",
    "3+ Years Field Experience",
  ];

  const firmStats = [
    ["3+", "Years Experience"],
    ["8+", "High-Rise Projects"],
    ["2.5", "Years Under Chartered Engineer"],
    ["4", "Building Types Served"],
  ];

  const firmValues = [
    {
      title: "Safety First",
      desc: "Every drawing is checked against IS code before it reaches site — no shortcuts on structural integrity.",
    },
    {
      title: "Design + Execution",
      desc: "From manual analysis and design to drafting, scheduling, and site coordination — structural integrity is carried through every stage.",
    },
    {
      title: "Transparent Process",
      desc: "Clients get clear timelines, honest cost estimates, and direct coordination between design and site teams.",
    },
  ];

  return (
    <main className="bg-[#FAFAF8] text-[#0F172A]">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-40">
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0H40V40" fill="none" stroke="#0F172A" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#about-grid)" />
        </svg>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 font-mono text-xs tracking-wide text-slate-600 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2410C]" />
            About
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The engineer behind every drawing.
          </h1>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-slate-600">
            Providing reliable structural engineering expertise to ensure safety,
            durability, and long-term performance — on every site, every time.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.5rem] border border-slate-900/10 shadow-xl">
              <ImagePlaceholder label="Engineer Photo" className="h-full w-full" />
            </div>
            <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-slate-900/10 bg-white p-5">
              <p className="font-display text-base font-semibold">Vaibhav Mirje</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                Structural Design Engineer
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["RCC Design", "High-Rise Structures", "Site Coordination"].map((tag: string) => (
                  <span key={tag} className="rounded-full bg-slate-900/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionTag index="01" total="03">Background</SectionTag>
            <h2 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              Three years of turning calculations into structures that last.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>
                Vaibhav&apos;s engineering journey began on a residential construction site,
                where he handled AutoCAD planning, lineout works, and supervision of
                excavation and foundation work — a grounding that shaped how he
                approaches structural design today.
              </p>
              <p>
                That hands-on start carried through his M.Tech in Structural Engineering
                and into 2.5 years working under chartered structural engineer
                Avinash H. Hole in Pune, where he handled manual analysis and design
                for slabs, beams, columns, footings, and water tanks across 8+ high-rise
                residential, commercial, and institutional projects — including towers
                up to 25 floors.
              </p>
              <p>
                Today, Vaibhav works independently across North Karnataka, managing
                structural designs for commercial, residential, school, and hospital
                buildings — modelling in PlanWin, analyzing in StaadPro, and designing
                in RCDC, while coordinating directly with site engineers to ensure
                every structure is built true to its drawings.
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Credentials
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {credentials.map((item: string) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C2410C]" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12l5 5 9-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                Career Timeline
              </p>
              <ol className="relative space-y-8 border-l border-slate-900/10 pl-6">
                {timeline.map((t: { year: string; title: string; desc: string }) => (
                  <li key={t.year} className="relative">
                    <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-[#FAFAF8] bg-[#C2410C]" />
                    <span className="font-mono text-xs text-slate-500">{t.year}</span>
                    <h3 className="mt-1 font-display text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-900/10 bg-white px-8 py-10 text-center sm:px-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C2410C]">
              From practice to firm
            </span>
            <h3 className="max-w-lg font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              That same standard now runs through every project Vaibhav takes on.
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-4 py-20 text-white sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTag index="02" total="03" light>The Practice</SectionTag>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Vaibhav Mirje
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#C2410C]">
                Independent Structural Design Engineer · Chikodi, Belgaum
              </p>
              <p className="mt-5 max-w-lg leading-relaxed text-slate-300">
                Vaibhav&apos;s practice closes the gap between structural design and what
                actually gets built — pairing rigorous manual analysis with on-site
                coordination, so every project stays safe, economical, and true to its
                drawings from foundation to finish.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {firmStats.map((stat: string[], idx: number) => (
                  <div key={idx}>
                    <dt className="font-display text-2xl font-semibold">{stat[0]}</dt>
                    <dd className="mt-1 font-mono text-[10px] uppercase tracking-wide text-slate-400">
                      {stat[1]}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/projects"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#0F172A] transition-colors hover:bg-slate-100"
              >
                See our projects
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-white/10">
              <ImagePlaceholder label="Site Photo" className="h-full w-full" />
            </div>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-3">
            {firmValues.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTag index="03" total="03">Contact</SectionTag>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white px-8 py-14 text-center shadow-[0_30px_60px_-25px_rgba(15,23,42,0.2)] sm:px-16">
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 600 300" preserveAspectRatio="none">
              <defs>
                <pattern id="about-cta-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M0 0H30V30" fill="none" stroke="#0F172A" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="600" height="300" fill="url(#about-cta-grid)" />
            </svg>
            <h2 className="relative font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Want to work together?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-slate-600">
              Whether it&apos;s a new build or a structural audit, let&apos;s talk through
              what your project needs.
            </p>
            <Link
              href="/contact"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1E293B]"
            >
              Get in Touch
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}