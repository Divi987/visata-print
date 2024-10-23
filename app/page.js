import Image from "next/image";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import DiscountCodes from "./components/DiscountCodes";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerCarosel />
      <HeroSection />
      <h1>Printing Web App</h1>
      <Faq />
      <Footer />
    </div>
  );
}
