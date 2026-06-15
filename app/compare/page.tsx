import { Suspense } from "react";
import CompareHeader from "../../src/components/CompareHeader";
import CompareSection from "../../src/components/CompareSection";

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white max-w-md mx-auto pb-2">
      <CompareHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <CompareSection />
      </Suspense>
    </main>
  );
}