import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header/Header";
import TopBar from "@/components/TopBar/TopBar";
import Context from "@/Context/Context";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "sonner";
// import { Toaster } from "@/components/ui/sonner";
// import Loading from "./loading";
// import CartDrawer from "@/components/CartDrawer/CartDrawer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bandage",
  description: "A Brand of Cloths for sale the cloths",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Context>

        <TopBar/>
        <Header/>
        {children}
        <Toaster />
        <Footer/>
        </Context>
      </body>
    </html>
  );
}
