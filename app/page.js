import Image from "next/image";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import HeroSection from "./components/HeroSection";
import AllCategories from "./components/AllCategories/AllCategories";
import CardsCategories from "./components/CardsCategories/CardsCategories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerCarosel />
      <HeroSection />
      <AllCategories />
      <CardsCategories />
      <h1>Printing Web App</h1>
    </div>
  );
}
