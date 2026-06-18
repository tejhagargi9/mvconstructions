"use client";

export default function ServicesSection() {
  const services = [
    {
      title: "Structural Design",
      desc: "RCC, steel & composite structural systems engineered for safety and long-term performance.",
      icon: <path d="M4 20V8l8-5 8 5v12M4 20h16M9 20v-6h6v6" />,
    },
    {
      title: "Site Supervision",
      desc: "On-ground quality checks and execution monitoring to keep construction code-compliant.",
      icon: <path d="M3 20l6-14h6l6 14M7 20l5-12 5 12M9 16h6" />,
    },
    {
      title: "Structural Audits",
      desc: "Condition assessment and retrofitting recommendations for existing buildings.",
      icon: <path d="M12 2l9 4.9V17l-9 5-9-5V6.9L12 2zm0 5v10M7 9l5-2 5 2" />,
    },
    {
      title: "Consultation & Approvals",
      desc: "Drawings, calculations & documentation prepared for municipal code approval.",
      icon: <path d="M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5" />,
    },
  ];

  return (
    <section className="bg-[#0F172A] px-4 py-20 text-white sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-[#C2410C]">02/04</span>
            <span className="h-px flex-1 max-w-[40px] bg-slate-300" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">Services</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Engineering support at every stage of construction.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C2410C]/15 text-[#C2410C]">
                <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {s.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}