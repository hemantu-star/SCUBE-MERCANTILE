"use client";

import { useState } from "react";
import Link from "next/link";
import { company, nav } from "@/lib/content";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${company.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-md bg-white object-contain p-0.5"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">
              {company.name}
            </span>
            <span className="hidden text-[11px] text-white/60 sm:block">
              {company.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] font-medium text-white/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sun px-4 py-2 text-navy transition hover:bg-[#efb02a]"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-white/10 px-4 py-4 text-sm md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/85"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-medium text-sun"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
