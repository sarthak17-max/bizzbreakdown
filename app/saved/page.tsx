import SavedHeader from "../../src/components/SavedHeader";
import SavedEmptyState from "../../src/components/SavedEmptyState";

export default function SavedPage() {
  return (
  <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <SavedHeader />
      <SavedEmptyState />
    </main>
  );
}