import SavedHeader from "../../src/components/SavedHeader";
import SavedEmptyState from "../../src/components/SavedEmptyState";

export default function SavedPage() {
  return (
  <main className="min-h-screen bg-white max-w-md mx-auto pb-2">
      <SavedHeader />
      <SavedEmptyState />
    </main>
  );
}