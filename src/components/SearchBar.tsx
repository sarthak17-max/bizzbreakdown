"use client";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  return (
    <div className="mt-2">
      <div
        onClick={() => router.push("/search")}
        className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 bg-white shadow-sm cursor-pointer hover:shadow-md transition"
      >
        <span className="text-gray-400 text-xs">🔍</span>
        <input
          type="text"
          placeholder="Search companies, industries or topics..."
          readOnly
          className="flex-1 outline-none text-[10px] text-gray-500 bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
}