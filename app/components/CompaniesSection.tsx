"use client";

export default function HighlightSection() {
  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "8+", label: "Projects Delivered" },
    { value: "G+25", label: "Tallest Structure Designed" },
    { value: "M.Tech", label: "Structural Engineering" },
  ];

  return (
    <section className="border-y border-slate-900/8 bg-white/60 px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <svg viewBox="0 0 32 24" className="mx-auto mb-6 h-8 w-8 text-[#C2410C]/30" fill="currentColor">
          <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14 3.2C9.6 4.4 7.2 7.2 6.8 11.2H12.8V24H0ZM18 24V14.4C18 6.4 22.8 1.2 30.8 0L32 3.2C27.6 4.4 25.2 7.2 24.8 11.2H30.8V24H18Z" />
        </svg>

        <p className="font-display text-2xl font-medium leading-snug text-[#0F172A] sm:text-3xl">
          I'd rather understand the calculation than trust the software blindly —
          every design starts on paper before it ever opens in StaadPro.
        </p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          — Vaibhav Mirje, Structural Design Engineer
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-slate-900/8 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-semibold text-[#C2410C]">{s.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}