import Link from "next/link";

const comparisons = [
  {
    left: { name: 'Zomato', slug: 'zomato', logo: 'https://www.google.com/s2/favicons?domain=zomato.com&sz=128' },
    right: { name: 'Swiggy', slug: 'swiggy', logo: 'https://www.google.com/s2/favicons?domain=swiggy.com&sz=128' },
    title: 'Zomato vs Swiggy',
    subtitle: 'Food Delivery Giants',
  },
  {
    left: { name: 'Blinkit', slug: 'blinkit', logo: 'https://www.google.com/s2/favicons?domain=blinkit.com&sz=128' },
    right: { name: 'Zepto', slug: 'zepto', logo: 'https://www.google.com/s2/favicons?domain=zeptonow.com&sz=128' },
    title: 'Blinkit vs Zepto',
    subtitle: 'Quick Commerce Battle',
  },
  {
    left: { name: 'Flipkart', slug: 'flipkart', logo: 'https://www.google.com/s2/favicons?domain=flipkart.com&sz=128' },
    right: { name: 'Amazon', slug: 'amazon', logo: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=128' },
    title: 'Flipkart vs Amazon',
    subtitle: 'E-commerce Leaders',
  },
];

export default function PopularComparisons() {
  return (
    <section className="px-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
          Popular Comparisons
        </h3>
        <Link href="/compare" className="text-xs text-purple-600 font-medium">View All</Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
        {comparisons.map((c) => (
          <Link
            href={`/compare?a=${c.left.slug}&b=${c.right.slug}`}
            key={c.title}
            className="min-w-[130px] border border-gray-100 rounded-2xl p-3 shadow-sm bg-white flex flex-col items-center hover:shadow-md transition"
          >
            <div className="flex items-center gap-1">
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                <img src={c.left.logo} alt={c.left.name} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-gray-400 font-bold text-xs">vs</span>
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                <img src={c.right.logo} alt={c.right.name} className="w-8 h-8 object-contain" />
              </div>
            </div>
            <p className="text-xs font-semibold text-gray-800 mt-2 text-center">{c.title}</p>
            <p className="text-[10px] text-gray-400 text-center mt-0.5">{c.subtitle}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}