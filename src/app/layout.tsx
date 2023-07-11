import Providers from "@/components/Providers";
import CopyRight from "../../components/section/CopyRight";
import Footer from "../../components/section/Footer";
import { Navbar } from "../../components/section/Navbar";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <CopyRight />
        </body>
      </html>
    </Providers>
  );
}
