import IndustriesHeader from "../../src/components/IndustriesHeader";
import IndustriesList from "../../src/components/IndustriesList";
import BottomNav from "../../src/components/BottomNav";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <IndustriesHeader />
      <IndustriesList />
      <BottomNav />
    </main>
  );
}