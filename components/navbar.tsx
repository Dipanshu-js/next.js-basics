"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">NextApp 🚀</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/dashboard" className="hover:text-blue-200 transition">
            Dashboard
          </Link>
          <Link href="/albums" className="hover:text-blue-200 transition">
            Albums
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition">
            About
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-lg bg-blue-700">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/albums">Albums</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </nav>
  );
}
