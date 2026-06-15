"use client";

"use client";

import { useRouter } from "next/navigation";

const categories = ['All', 'Food Delivery', 'Quick Commerce', 'FinTech', 'E-commerce', 'Beauty E-commerce'];

export default function SearchHeader({
  query,
  setQuery,
  filter,
  setFilter,
}: {
  query: string;
  setQuery: (val: string) => void;
  filter: string;
  setFilter: (val: string) => void;
}) {
  const router = useRouter();
  return (
    <div className="px-4 pt-4">
      {/* Top row with back button */}
      <div className="flex items-center gap-3 mb-3">
      <button
  onClick={() => router.back()}
  className="text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
>
  ←
</button>
        <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Search
        </h1>
      </div>

      {/* Search input */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2.5 bg-white shadow-sm">
        <span className="text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search companies, industries or topics..."
          className="flex-1 outline-none text-xs text-gray-700 bg-transparent"
          autoFocus
        />
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition ${
              filter === cat
                ? 'bg-purple-600 text-white font-medium'
                : 'bg-gray-100 text-gray-600 hover:bg-purple-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}