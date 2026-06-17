"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../lib/companies";

const industryMeta = [
  { name: 'Food Delivery', emoji: '🛵', bg: 'bg-red-50' },
  { name: 'Quick Commerce', emoji: '⚡', bg: 'bg-yellow-50' },
  { name: 'FinTech', emoji: '🏦', bg: 'bg-blue-50' },
  { name: 'E-commerce', emoji: '🛒', bg: 'bg-purple-50' },
  { name: 'EdTech', emoji: '🎓', bg: 'bg-green-50' },
  { name: 'HealthTech', emoji: '❤️', bg: 'bg-pink-50' },
  { name: 'Travel', emoji: '✈️', bg: 'bg-indigo-50' },
  { name: 'Entertainment', emoji: '🎬', bg: 'bg-orange-50' },
  { name: 'Beauty E-commerce', emoji: '💄', bg: 'bg-rose-50' },
];

export default function IndustriesList() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCompanies().then((data) => {
      const tally: Record<string, number> = {};
      data.forEach((c: any) => {
        tally[c.category] = (tally[c.category] || 0) + 1;
      });
      setCounts(tally);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="px-4 mt-4">
        <p className="text-xs text-gray-400 text-center mt-10">Loading industries...</p>
      </section>
    );
  }

  return (
    <section className="px-4 mt-4">
      <div className="grid grid-cols-2 gap-3">
        {industryMeta.map((ind) => (
          <Link
            href={`/search?category=${encodeURIComponent(ind.name)}`}
            key={ind.name}
            className={`${ind.bg} rounded-2xl p-4 flex flex-col gap-2 cursor-pointer hover:shadow-sm transition`}
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
              {ind.emoji}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                {ind.name}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                {counts[ind.name] || 0} companies
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}