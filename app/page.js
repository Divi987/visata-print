import Image from "next/image";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerCarosel />
      <HeroSection />
      <h1>Printing Web App</h1>
    </div>
  );
}
