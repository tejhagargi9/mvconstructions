"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900/10 bg-[#FAFAF8] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
              <img src="/images/mvlogo.png" alt="MV Constructions" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-[#0F172A]">
              MV Constructions
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-[#C2410C]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:vaibhavmirje1606@gmail.com"
            className="font-mono text-xs text-slate-500 transition-colors hover:text-[#C2410C]"
          >
            vaibhavmirje1606@gmail.com
          </a>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-900/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-slate-400">
            © {year} MV Constructions. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            Chikodi, Belgaum · +91 91102 80249
          </p>
        </div>
      </div>
    </footer>
  );
}