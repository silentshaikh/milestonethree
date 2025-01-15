import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Context from "@/Context/Context";
import Footer from "@/components/Footer/Footer";
import SecondHeader from "@/components/SecondHeader/SecondHeader";


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
        <SecondHeader/>
        {children}
        <Footer/>
        </Context>
      </body>
    </html>
  );
}
