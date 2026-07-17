"use client";

import { useState } from "react";

const NAV = [
  { href: "#findings", label: "Findings" },
  { href: "#ledger", label: "Ledger" },
  { href: "#method", label: "Method" },
  { href: "#record", label: "Prior record" },
  { href: "#apps", label: "Apps" },
  { href: "#register", label: "Register" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3">
        <a href="#top" className="font-mono text-[13px] font-medium tracking-tight text-ink">
          m.umer
        </a>

        <nav className="ml-auto hidden items-center gap-5 md:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="font-mono text-[12px] text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-auto rounded-md bg-verify px-3.5 py-1.5 font-mono text-[12px] font-medium text-white transition-colors hover:bg-verify-hover md:ml-0"
        >
          Contact
        </a>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="-mr-1 flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          <span className="font-mono text-[15px]">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <nav aria-label="Sections" className="border-t border-rule bg-paper px-5 py-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-3 font-mono text-[13px] text-ink last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
