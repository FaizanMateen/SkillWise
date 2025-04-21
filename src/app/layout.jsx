"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen((prev) => !prev);
  const handleNavOpen = () => setIsNavOpen(true);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header onNavToggle={handleNavToggle} onNavOpen={handleNavOpen} />
        <div
          className="relative grid w-screen grid-cols-[14rem_1fr]"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <Sidebar isNavOpen={isNavOpen} onNavToggle={handleNavToggle} />
          <main className="overflow-y-auto px-4 py-6 md:p-7">{children}</main>
        </div>
      </body>
    </html>
  );
}
