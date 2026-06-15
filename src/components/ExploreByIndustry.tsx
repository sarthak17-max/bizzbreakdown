import Link from "next/link";

const industries = [
  { name: 'Food Delivery', emoji: '🛵' },
  { name: 'Quick Commerce', emoji: '⚡' },
  { name: 'FinTech', emoji: '🏦' },
  { name: 'E-commerce', emoji: '🛒' },
  { name: 'EdTech', emoji: '🎓' },
  { name: 'HealthTech', emoji: '❤️' },
];

export default function ExploreByIndustry() {
  return (
    <section className="px-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Explore by Industry
        </h3>
        <Link href="/industries" className="text-xs text-purple-600 font-medium">View All</Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {industries.map((ind) => (
          <Link
            href={`/search?category=${encodeURIComponent(ind.name)}`}
            key={ind.name}
            className="flex flex-col items-center min-w-[56px] cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl group-hover:bg-purple-100 transition">
              {ind.emoji}
            </div>
            <p className="text-[10px] text-gray-600 text-center mt-1 font-medium leading-tight">
              {ind.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}