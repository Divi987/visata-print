import HeroSection from "./components/HeroSection";
import AllCategories from "./components/AllCategories/AllCategories";
import CardsCategories from "./components/CardsCategories/CardsCategories";
import GiftCategories from "./components/GiftCategories/GiftCategories";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AllCategories />
      <CardsCategories />
      <GiftCategories />
      <h1>Printing Web App</h1>
    </div>
  );
}
