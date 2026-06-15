import Link from "next/link";

const tags = [
  { name: 'Zomato', slug: 'zomato' },
  { name: 'Blinkit', slug: 'blinkit' },
  { name: 'Zepto', slug: 'zepto' },
  { name: 'Nykaa', slug: 'nykaa' },
  { name: 'Swiggy', slug: 'swiggy' },
];

export default function PopularSearches() {
  return (
    <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
      <span className="text-[10px] text-gray-500">Popular searches:</span>
      {tags.map((tag) => (
        <Link
          key={tag.name}
          href={`/company/${tag.slug}`}
          className="text-[10px] text-purple-600 border border-purple-200 rounded-full px-2 py-0.5 hover:bg-purple-50 transition"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}