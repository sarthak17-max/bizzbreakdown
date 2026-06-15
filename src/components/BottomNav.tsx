"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: 'Home', emoji: '🏠', href: '/' },
  { label: 'Search', emoji: '🔍', href: '/search' },
  { label: 'Compare', emoji: '⚖️', href: '/compare' },
  { label: 'Industries', emoji: '🏭', href: '/industries' },
  { label: 'Saved', emoji: '🔖', href: '/saved' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-between z-50 max-w-2xl mx-auto">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
           className={`flex flex-col items-center gap-1 w-full text-center transition ${
  isActive ? "text-purple-600" : "text-gray-400 hover:text-purple-600"
}`}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}