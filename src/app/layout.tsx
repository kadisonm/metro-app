import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";

import Header from "@/components/header";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdlMetro",
  description: "",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="phone">
          <Header />
          <div className="content">
            {children}
          </div>
          <Nav />  
        </div>
      </body>
    </html>
  );
}
