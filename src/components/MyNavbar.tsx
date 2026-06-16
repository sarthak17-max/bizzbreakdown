"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: 'Home', emoji: '🏠', href: '/' },
  { label: 'Search', emoji: '🔍', href: '/search' },
  { label: 'Compare', emoji: '⚖️', href: '/compare' },
  { label: 'Industries', emoji: '🏭', href: '/industries' },
  { label: 'Saved', emoji: '🔖', href: '/saved' },
];

export default function MyNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
        <button onClick={() => setOpen(true)} className="text-gray-600 text-xl md:hidden">☰</button>
        <h1 className="text-xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
          <span className="text-black">Bizz</span><span className="text-purple-600">Breakdown</span>
        </h1>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-purple-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/search" className="text-gray-600 text-xl md:hidden">🔍</Link>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-[60] md:hidden"
        />
      )}

      {/* Drawer - mobile only */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-[70] transform transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-lg font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
            <span className="text-black">Bizz</span><span className="text-purple-600">Breakdown</span>
          </h2>
          <button onClick={() => setOpen(false)} className="text-gray-400 text-xl">✕</button>
        </div>

        <div className="flex flex-col py-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-purple-600 transition"
            >
              <span className="text-lg">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}