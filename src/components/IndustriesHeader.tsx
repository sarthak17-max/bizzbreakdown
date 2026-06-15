import Link from "next/link";

export default function IndustriesHeader() {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-3 mb-1">
        <Link
          href="/"
          className="text-gray-600 text-xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ←
        </Link>
        <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Industries
        </h1>
      </div>
      <p className="text-xs text-gray-400 pl-9">
        Explore companies grouped by sector
      </p>
    </div>
  );
}