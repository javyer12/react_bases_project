"use client";
import { useState } from "react";
import { profile } from "../../data/profile";
import Link from "next/link";

const links = [
  { href: "/football", label: "Football" },
  { href: "/calculator", label: "Calculator" },
  { href: "/convertion", label: "Converter" },
  { href: "/notes", label: "Grades" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Principal"
      >
        <Link href="/" onClick={close} className="font-semibold text-white">
          Home
        </Link>

        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        id="menu-movil"
        className={`grid overflow-hidden bg-paper transition-all duration-300 sm:hidden ${open ? "grid-rows-[1fr] border-t border-ink/10" : "grid-rows-[0fr]"}`}
      >
        <ul className="min-h-0 overflow-hidden px-6 text-white">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className=" block border-b border-ink/10 py-4 text-lg last:border-0"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
