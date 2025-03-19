"use client"; 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Loader from "@/app/loading";
import ThemeProvider from "@/Components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Portfolio - Tariq Mehmood";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      // Jab loader complete ho jaye, tab wapas theme color set karein
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", theme === "dark" ? "#272727" : "#272727");
      }
    }, 3000);
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Portfolio.png" sizes="any" />
        <meta name="theme-color" content={isLoading ? "#FFAF00" : theme === "dark" ? "#272727" : "#272727"} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-5 md:px-0 overflow-x-hidden`}
      >
        <ThemeProvider>
          <HeroUIProvider>
            {isLoading ? <Loader /> : children}
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
