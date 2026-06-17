"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCompanies } from "./lib/companies";

export default function TrendingCompanies() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCompanies().then((data) => {
      setCompanies(data.slice(0, 5));
      setLoading(false);
    });
  }, []);

  return (
    <section className="px-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Trending Companies
        </h3>
        <Link href="/search" className="text-xs text-purple-600 font-medium">View All</Link>
      </div>
      {loading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {companies.map((c) => (
            <Link href={`/company/${c.slug}`} key={c.slug} className="flex flex-col items-center min-w-[64px]">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
                <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
              </div>
              <p className="text-xs font-semibold mt-1 text-gray-800">{c.name}</p>
              <p className="text-[10px] text-gray-400">{c.category}</p>
              <p className="text-[10px] text-green-500 font-medium">{c.change}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}