"use client";

import { useRouter } from "next/navigation";

export default function CompareHeader() {
  const router = useRouter();

  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-3 mb-1">
        <button
          onClick={() => router.back()}
          className="text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ←
        </button>
        <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Compare Companies
        </h1>
      </div>
      <p className="text-xs text-gray-400 pl-9">
        Pick two companies to see a side-by-side breakdown
      </p>
    </div>
  );
}