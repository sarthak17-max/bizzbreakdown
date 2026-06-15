import IndustriesHeader from "../../src/components/IndustriesHeader";
import IndustriesList from "../../src/components/IndustriesList";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-6">
      <IndustriesHeader />
      <IndustriesList />
    </main>
  );
}