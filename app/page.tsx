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
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <MyNavbar />

      <div className="bg-indigo-50 mx-4 mt-3 rounded-2xl px-3 py-3">
        <Hero />
        <SearchBar />
        <PopularSearches />
      </div>

      <TrendingCompanies />
      <PopularComparisons />
      <ExploreByIndustry />
      <SaveTrackBanner />
      <BottomNav />
    </main>
  );
}