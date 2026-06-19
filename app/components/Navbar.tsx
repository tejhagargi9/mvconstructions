"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:top-6 sm:px-6">
      <nav
        className={[
          "mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6",
          "backdrop-blur-xl backdrop-saturate-150",
          scrolled
            ? "border-slate-900/10 bg-white/70 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]"
            : "border-slate-900/5 bg-white/50 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)]",
        ].join(" ")}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden">
            <img src="/images/mvlogo.png" alt="MV Constructions" className="h-full w-full object-cover" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-[#0F172A]">
              MV Constructions
            </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={[
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-[#0F172A]"
                      : "text-slate-600 hover:text-[#0F172A]",
                  ].join(" ")}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-[#C2410C]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA (desktop) */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#0F172A] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#1E293B] md:inline-flex"
        >
          Let&apos;s talk
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#0F172A] md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none"
            stroke="currentColor" strokeWidth="1.8">
            {mobileOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          "mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-slate-900/5 bg-white/80 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]" : "max-h-0 opacity-0 border-transparent",
        ].join(" ")}
      >
        <ul className="flex flex-col gap-1 p-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-slate-900/5 text-[#0F172A]"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-[#0F172A]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-1">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl bg-[#0F172A] px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Let&apos;s talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}