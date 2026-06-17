"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getAllCompanies } from "../lib/companies";

const metrics: { label: string; key: string }[] = [
  { label: "Category", key: "category" },
  { label: "Valuation", key: "valuation" },
  { label: "Revenue", key: "revenue" },
  { label: "Users", key: "users" },
  { label: "Founded", key: "founded" },
  { label: "Total Funding", key: "funding" },
];

export default function CompareSection() {
  const searchParams = useSearchParams();
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [companyA, setCompanyA] = useState<any>(null);
  const [companyB, setCompanyB] = useState<any>(null);

  useEffect(() => {
    getAllCompanies().then((data) => {
      setCompanies(data);
      setLoading(false);

      const a = searchParams.get("a");
      const b = searchParams.get("b");

      const foundA = data.find((c: any) => c.slug === a) || data[0];
      const foundB = data.find((c: any) => c.slug === b) || data[1];

      setCompanyA(foundA);
      setCompanyB(foundB);
    });
  }, [searchParams]);

  if (loading || !companyA || !companyB) {
    return (
      <section className="px-4 mt-4">
        <p className="text-xs text-gray-400 text-center mt-10">Loading companies...</p>
      </section>
    );
  }

  return (
    <section className="px-4 mt-4">
      {/* Selectors */}
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <select
            value={companyA.slug}
            onChange={(e) => {
              const selected = companies.find((c) => c.slug === e.target.value)!;
              setCompanyA(selected);
            }}
            className="w-full text-xs font-semibold text-gray-700 border border-gray-200 rounded-full px-3 py-2 bg-white outline-none"
          >
            {companies.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <span className="text-purple-600 font-bold text-xs">VS</span>

        <div className="flex-1">
          <select
            value={companyB.slug}
            onChange={(e) => {
              const selected = companies.find((c) => c.slug === e.target.value)!;
              setCompanyB(selected);
            }}
            className="w-full text-xs font-semibold text-gray-700 border border-gray-200 rounded-full px-3 py-2 bg-white outline-none"
          >
            {companies.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Logos row */}
      <div className="flex items-center justify-between mt-4 bg-indigo-50 rounded-2xl px-4 py-4">
        <div className="flex flex-col items-center flex-1">
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
            <img src={companyA.logo} alt={companyA.name} className="w-8 h-8 object-contain" />
          </div>
          <p className="text-xs font-bold text-gray-800 mt-2">{companyA.name}</p>
        </div>

        <span className="text-gray-400 font-bold text-sm px-2">VS</span>

        <div className="flex flex-col items-center flex-1">
          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
            <img src={companyB.logo} alt={companyB.name} className="w-8 h-8 object-contain" />
          </div>
          <p className="text-xs font-bold text-gray-800 mt-2">{companyB.name}</p>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mt-4 flex flex-col gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2"
          >
            <span className="text-xs font-semibold text-gray-700 flex-1 text-left">
              {companyA[m.key]}
            </span>
            <span className="text-[10px] text-gray-400 px-3 text-center min-w-[70px]">
              {m.label}
            </span>
            <span className="text-xs font-semibold text-gray-700 flex-1 text-right">
              {companyB[m.key]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}