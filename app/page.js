import HeroSection from "./components/HeroSection";
import AllCategories from "./components/AllCategories/AllCategories";
import CardsCategories from "./components/CardsCategories/CardsCategories";
import GiftCategories from "./components/GiftCategories/GiftCategories";
import Footer from "./components/Footer";
import BestSellerProductsList from "./components/BestSellerProducts/BestSellerProductList";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AllCategories />
      <BestSellerProductsList />
      <CardsCategories />
      <GiftCategories />
    </div>
  );
}
