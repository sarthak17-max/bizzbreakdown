"use client";

import Link from "next/link";
import { companyData } from "../companyData";

const results = Object.entries(companyData).map(([slug, c]) => ({
  slug,
  ...c,
}));

export default function SearchResults({ query, filter }: { query: string; filter: string }) {
  const filtered = results.filter((item) => {
    const matchesQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());

    const matchesFilter = filter === "All" || item.category === filter;

    return matchesQuery && matchesFilter;
  });

  return (
    <section className="px-4 mt-4">
      <p className="text-xs text-gray-400 mb-2">Showing {filtered.length} results</p>

      {filtered.length === 0 ? (
        <p className="text-xs text-gray-400 text-center mt-10">No companies found.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/company/${item.slug}`}
              className="flex items-center justify-between border border-gray-100 rounded-2xl px-3 py-2.5 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={item.logo} alt={item.name} className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
              </div>
              <span className="text-xs text-green-500 font-medium">{item.change}</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}