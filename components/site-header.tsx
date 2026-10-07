
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Events", "/events"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="container-wide flex h-[76px] items-center justify-between gap-5">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/logo.png"
            alt="The Preferred Mortgage"
            width={190}
            height={55}
            priority
            className="h-auto w-[170px] object-contain sm:w-[190px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-bold text-slate-600 transition hover:text-[#071a31]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact?booking=true"
            className="btn-primary"
          >
            Book a Free Call
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="border-t border-slate-100 bg-white p-5 lg:hidden">
          <nav className="container-wide grid gap-2">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-bold transition hover:bg-slate-50"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/contact?booking=true"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Book a Free Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

