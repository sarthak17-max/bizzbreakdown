import Link from "next/link";

const companies = [
  {
    name: 'Zomato', slug: 'zomato', category: 'Food Delivery', change: '+2.35%',
    logo: 'https://www.google.com/s2/favicons?domain=zomato.com&sz=128',
  },
  {
    name: 'Swiggy', slug: 'swiggy', category: 'Food Delivery', change: '+1.28%',
    logo: 'https://www.google.com/s2/favicons?domain=swiggy.com&sz=128',
  },
  {
    name: 'Blinkit', slug: 'blinkit', category: 'Quick Commerce', change: '+3.42%',
    logo: 'https://www.google.com/s2/favicons?domain=blinkit.com&sz=128',
  },
  {
    name: 'Zepto', slug: 'zepto', category: 'Quick Commerce', change: '+4.15%',
    logo: 'https://www.google.com/s2/favicons?domain=zepto.com&sz=128',
  },
  {
    name: 'Paytm', slug: 'paytm', category: 'FinTech', change: '+0.85%',
    logo: 'https://www.google.com/s2/favicons?domain=paytm.com&sz=128',
  },
];

export default function TrendingCompanies() {
  return (
    <section className="px-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Trending Companies
        </h3>
        <Link href="/search" className="text-xs text-purple-600 font-medium">View All</Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {companies.map((c) => (
          <Link href={`/company/${c.slug}`} key={c.name} className="flex flex-col items-center min-w-[64px]">
            <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden">
              <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
            </div>
            <p className="text-xs font-semibold mt-1 text-gray-800">{c.name}</p>
            <p className="text-[10px] text-gray-400">{c.category}</p>
            <p className="text-[10px] text-green-500 font-medium">{c.change}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}