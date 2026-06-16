import Link from "next/link";

const industries = [
  { name: 'Food Delivery', emoji: '🛵', count: 2, bg: 'bg-red-50' },
  { name: 'Quick Commerce', emoji: '⚡', count: 2, bg: 'bg-yellow-50' },
  { name: 'FinTech', emoji: '🏦', count: 1, bg: 'bg-blue-50' },
  { name: 'E-commerce', emoji: '🛒', count: 3, bg: 'bg-purple-50' },
  { name: 'EdTech', emoji: '🎓', count: 2, bg: 'bg-green-50' },
  { name: 'HealthTech', emoji: '❤️', count: 2, bg: 'bg-pink-50' },
  { name: 'Travel', emoji: '✈️', count: 2, bg: 'bg-indigo-50' },
  { name: 'Entertainment', emoji: '🎬', count: 2, bg: 'bg-orange-50' },
];

export default function IndustriesList() {
  return (
    <section className="px-4 mt-4">
      <div className="grid grid-cols-2 gap-3">
        {industries.map((ind) => (
          <Link
            href={`/search?category=${encodeURIComponent(ind.name)}`}
            key={ind.name}
            className={`${ind.bg} rounded-2xl p-4 flex flex-col gap-2 cursor-pointer hover:shadow-sm transition`}
          >
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm">
              {ind.emoji}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                {ind.name}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                {ind.count} companies
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}