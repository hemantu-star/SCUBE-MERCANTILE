"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-blue-900">
          <img src="/images/logo.png" alt="S-Cube Mercantile" className="h-9 w-9" />
          S-Cube Mercantile
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <Link href="/about-us" className="hover:text-blue-700">About Us</Link>
          <Link href="/products" className="hover:text-blue-700">Products</Link>
          <Link href="/solutions" className="hover:text-blue-700">Solutions</Link>
          <Link href="/brands" className="hover:text-blue-700">Brands</Link>
          <Link href="/gallery" className="hover:text-blue-700">Gallery</Link>
          <Link
            href="/contact"
            className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/brands" onClick={() => setMenuOpen(false)}>Brands</Link>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}