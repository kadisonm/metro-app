import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.scss";

import Header from "@/components/header";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdlMetro",
  description: "",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="content">
          {children}
        </div>
        <Nav />
      </body>
    </html>
  );
}
