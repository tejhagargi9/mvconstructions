"use client";

export default function CompaniesSection() {
  const companies = [
    "L&T Construction",
    "Shapoorji Pallonji",
    "Tata Projects",
    "AECOM",
    "Gammon India",
  ];

  return (
    <section className="border-y border-slate-900/8 bg-white/60 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          Experience across leading firms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((c) => (
            <span
              key={c}
              className="font-display text-base font-medium text-slate-400 transition-colors hover:text-[#0F172A]"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}