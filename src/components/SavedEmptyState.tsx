"use client";

import Link from "next/link";
import { useSavedCompanies } from "../useSavedCompanies";
import { companyData } from "../companyData";

export default function SavedEmptyState() {
  const { saved } = useSavedCompanies();

  if (saved.length === 0) {
    return (
      <section className="px-4 mt-16 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-4xl mb-4">
          🔖
        </div>
        <h2 className="text-base font-bold text-gray-800" style={{ fontFamily: 'Sora, sans-serif' }}>
          No saved companies yet
        </h2>
        <p className="text-xs text-gray-400 mt-2 max-w-[240px]">
          Start exploring and tap the bookmark icon on any company to add it to your watchlist.
        </p>
        <Link
          href="/"
          className="mt-5 bg-purple-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-purple-700 transition"
        >
          Browse Companies
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 mt-4">
      <p className="text-xs text-gray-400 mb-2">
        {saved.length} saved {saved.length === 1 ? 'company' : 'companies'}
      </p>
      <div className="flex flex-col gap-3">
        {saved.map((slug) => {
          const company = companyData[slug];
          if (!company) return null;
          return (
            <Link
              key={slug}
              href={`/company/${slug}`}
              className="flex items-center justify-between border border-gray-100 rounded-2xl px-4 py-4 hover:bg-gray-50 hover:shadow-sm transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <img src={company.logo} alt={company.name} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-800">{company.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{company.category}</p>
                </div>
              </div>
              <span className="text-sm text-green-500 font-semibold">{company.change}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}