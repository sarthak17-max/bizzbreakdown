import Link from "next/link";

export default function SavedHeader() {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-3 mb-1">
        <Link
          href="/"
          className="text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ←
        </Link>
        <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Saved
        </h1>
      </div>
      <p className="text-sm text-gray-400 pl-9 mt-1">
        Your watchlist of tracked companies
      </p>
    </div>
  );
}