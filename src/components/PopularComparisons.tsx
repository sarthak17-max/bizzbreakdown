"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../lib/companies";

const pairs = [
  { leftSlug: "zomato", rightSlug: "swiggy", title: "Zomato vs Swiggy", subtitle: "Food Delivery Giants" },
  { leftSlug: "blinkit", rightSlug: "zepto", title: "Blinkit vs Zepto", subtitle: "Quick Commerce Battle" },
  { leftSlug: "flipkart", rightSlug: "amazon", title: "Flipkart vs Amazon", subtitle: "E-commerce Leaders" },
];

export default function PopularComparisons() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCompanies().then((data) => {
      setCompanies(data);
      setLoading(false);
    });
  }, []);

  const findBySlug = (slug: string) => companies.find((c) => c.slug === slug);

  return (
    <section className="px-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Popular Comparisons
        </h3>
        <Link href="/compare" className="text-xs text-purple-600 font-medium">View All</Link>
      </div>

      {loading ? (
        <p className="text-xs text-gray-400">Loading...</p>
      ) : (
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {pairs.map((p) => {
            const left = findBySlug(p.leftSlug);
            const right = findBySlug(p.rightSlug);
            if (!left || !right) return null;

            return (
              <Link
                href={`/compare?a=${left.slug}&b=${right.slug}`}
                key={p.title}
                className="min-w-[130px] border border-gray-100 rounded-2xl p-3 shadow-sm bg-white flex flex-col items-center hover:shadow-md transition"
              >
                <div className="flex items-center gap-1">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={left.logo} alt={left.name} className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-gray-400 font-bold text-xs">vs</span>
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={right.logo} alt={right.name} className="w-8 h-8 object-contain" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-800 mt-2 text-center">{p.title}</p>
                <p className="text-[10px] text-gray-400 text-center mt-0.5">{p.subtitle}</p>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}