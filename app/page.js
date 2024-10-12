import Image from "next/image";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";

export default function Home() {
  return (
    <div className="">
      <Header />
      <BannerCarosel />
      <h1>Printing Web App</h1>
    </div>
  );
}
