import MyNavbar from "../src/components/MyNavbar";
import Hero from "../src/components/Hero";
import SearchBar from "../src/components/SearchBar";
import PopularSearches from "../src/components/PopularSearches";
import TrendingCompanies from "../src/TrendingCompanies";
import PopularComparisons from "../src/components/PopularComparisons";
import ExploreByIndustry from "../src/components/ExploreByIndustry";
import SaveTrackBanner from "../src/components/SaveTrackBanner";
import BottomNav from "../src/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20 md:pb-8">
      <MyNavbar />

      {/* Hero section - wider on desktop */}
      <div className="bg-indigo-50 mx-4 mt-3 rounded-2xl px-3 py-3 md:mx-8 md:px-8 md:py-8 md:mt-6">
        <Hero />
        <SearchBar />
        <PopularSearches />
      </div>

      {/* Two column grid on desktop */}
      <div className="md:grid md:grid-cols-2 md:gap-6 md:px-8 md:mt-6">
        <TrendingCompanies />
        <PopularComparisons />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-6 md:px-8 md:mt-2">
        <ExploreByIndustry />
        <SaveTrackBanner />
      </div>

      <BottomNav />
    </main>
  );
}