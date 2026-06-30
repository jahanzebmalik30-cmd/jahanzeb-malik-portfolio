"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-40">
      <nav className="section-shell glass flex min-h-16 items-center justify-between rounded-full px-4 py-3">
        <a href="#home" className="focus-ring rounded-full px-2 font-bold text-[var(--foreground)]">
          Jahanzeb <span className="gold-text">Malik</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--gold-soft)] hover:text-[var(--foreground)]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/70 text-[var(--foreground)] lg:hidden dark:bg-white/10"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="section-shell glass mt-2 grid gap-1 rounded-2xl p-3 lg:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-xl px-4 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--gold-soft)]"
            >
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
