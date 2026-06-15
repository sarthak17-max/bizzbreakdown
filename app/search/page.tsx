"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchHeader from "../../src/components/SearchHeader";
import SearchResults from "../../src/components/SearchResults";

export default function SearchPage() {
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
    <main className="min-h-screen bg-white max-w-md mx-auto pb-2">
      <SearchHeader query={query} setQuery={setQuery} filter={filter} setFilter={setFilter} />
      <SearchResults query={query} filter={filter} />
    </main>
  );
}