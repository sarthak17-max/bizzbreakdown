import IndustriesHeader from "../../src/components/IndustriesHeader";
import IndustriesList from "../../src/components/IndustriesList";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white max-w-md mx-auto pb-2">
      <IndustriesHeader />
      <IndustriesList />
    </main>
  );
}