"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchHeader from "../../src/components/SearchHeader";
import SearchResults from "../../src/components/SearchResults";

function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setFilter(category);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <SearchHeader
        query={query}
        setQuery={setQuery}
        filter={filter}
        setFilter={setFilter}
      />
      <SearchResults query={query} filter={filter} />
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}