'use client'

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import RecoilRootWrapper from "./RecoilRootWrapper";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vista Print",
  description: "Vista Print",
};

export default function HomeLayout({ children }) {
  const pathname = usePathname();

  const isEditorRoute = pathname.startsWith("/editor/");
  return (
    <>
          {!isEditorRoute && <Header /> }
          {!isEditorRoute && <BannerCarosel /> }
          {children}
          {!isEditorRoute && <Footer /> }
    </>
  );
}
