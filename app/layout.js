import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import BannerCarosel from "./components/BannerCarosel";
import RecoilRootWrapper from "./RecoilRootWrapper";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecoilRootWrapper>
          <Header />
          <BannerCarosel />
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
