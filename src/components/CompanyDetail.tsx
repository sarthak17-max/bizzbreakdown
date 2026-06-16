"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSavedCompanies } from "../useSavedCompanies";
export default function CompanyDetail({ company, slug }: { company: any; slug: string }) {
  const router = useRouter();
  const { isSaved, toggleSave } = useSavedCompanies();
  const saved = isSaved(slug);

  return (
    <div>
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
           <button
  onClick={() => router.back()}
  className="text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
>
  ←
</button>
            <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
              Company Profile
            </h1>
          </div>
          <button
            onClick={() => toggleSave(slug)}
            className={`text-xl w-9 h-9 flex items-center justify-center rounded-full transition ${
              saved ? 'text-purple-600' : 'text-gray-400 hover:bg-gray-100'
            }`}
          >
            {saved ? '🔖' : '🏷️'}
          </button>
        </div>
      </div>

      {/* Company header card */}
      <div className="px-4">
        <div className="bg-indigo-50 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
            <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
              {company.name}
            </h2>
            <p className="text-xs text-gray-500">{company.category}</p>
            <p className="text-xs text-green-500 font-medium mt-0.5">{company.change} today</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="px-4 mt-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
          About
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">{company.description}</p>
      </div>

      {/* Key Stats Grid */}
      <div className="px-4 mt-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
          Key Stats
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <Stat label="Valuation" value={company.valuation} />
          <Stat label="Revenue" value={company.revenue} />
          <Stat label="Users" value={company.users} />
          <Stat label="Total Funding" value={company.funding} />
          <Stat label="Founded" value={company.founded} />
          <Stat label="Employees" value={company.employees} />
        </div>
      </div>

      {/* Company Info */}
      <div className="px-4 mt-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
          Company Info
        </h3>
        <div className="flex flex-col gap-2">
          <InfoRow label="Headquarters" value={company.headquarters} />
          <InfoRow label="CEO" value={company.ceo} />
          <InfoRow label="Category" value={company.category} />
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 mt-5 mb-4">
        <Link
  href={`/compare?a=${slug}`}
  className="block text-center bg-purple-600 text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-purple-700 transition"
>
  Compare with another company
</Link>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-100 rounded-xl p-3">
      <p className="text-sm font-bold text-gray-800">{value}</p>
      <p className="text-[10px] text-gray-400 mt-0.5">{label}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-xs font-semibold text-gray-800">{value}</span>
    </div>
  );
}