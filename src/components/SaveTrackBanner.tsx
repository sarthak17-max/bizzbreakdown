import Link from "next/link";

export default function SaveTrackBanner() {
  return (
    <section className="px-4 mt-3">
      <Link
        href="/saved"
        className="flex items-center justify-between bg-indigo-50 rounded-2xl px-4 py-3 gap-3 hover:shadow-sm transition cursor-pointer"
      >
        <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center text-white text-lg shrink-0">
          🔖
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Save & Track Companies
          </p>
          <p className="text-[10px] text-gray-500 mt-0.5">
            Create your watchlist and get updates on companies you care about.
          </p>
        </div>
        <span className="shrink-0 bg-purple-600 text-white text-[10px] font-semibold px-3 py-2 rounded-full hover:bg-purple-700 transition whitespace-nowrap">
          View →
        </span>
      </Link>
    </section>
  );
}