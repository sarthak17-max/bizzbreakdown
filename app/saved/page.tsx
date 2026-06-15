import SavedHeader from "../../src/components/SavedHeader";
import SavedEmptyState from "../../src/components/SavedEmptyState";

export default function SavedPage() {
  return (
  <main className="min-h-screen bg-white w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
      <SavedHeader />
      <SavedEmptyState />
    </main>
  );
}