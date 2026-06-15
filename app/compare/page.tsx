import { Suspense } from "react";
import CompareHeader from "../../src/components/CompareHeader";
import CompareSection from "../../src/components/CompareSection";

export default function ComparePage() {
  return (
  <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <CompareHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <CompareSection />
      </Suspense>
    </main>
  );
}