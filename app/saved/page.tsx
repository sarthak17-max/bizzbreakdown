import SavedHeader from "../../src/components/SavedHeader";
import SavedEmptyState from "../../src/components/SavedEmptyState";
import BottomNav from "../../src/components/BottomNav";

export default function SavedPage() {
  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <SavedHeader />
      <SavedEmptyState />
      <BottomNav />
    </main>
  );
}