"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "bizzbreakdown_saved";

export function useSavedCompanies() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const toggleSave = (slug: string) => {
    setSaved((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (slug: string) => saved.includes(slug);

  return { saved, toggleSave, isSaved };
}