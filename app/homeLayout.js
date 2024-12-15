'use client'

import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  const queryClient = new QueryClient();
  const isEditorRoute = pathname.startsWith("/editor/");
  return (
    <>
          <QueryClientProvider client={queryClient}>

          {!isEditorRoute && <Header /> }
          {!isEditorRoute && <BannerCarosel /> }
          {children}
          {!isEditorRoute && <Footer /> }
          </QueryClientProvider>
    </>
  );
}
