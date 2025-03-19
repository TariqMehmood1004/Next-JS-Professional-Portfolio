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
    }, 3000);
  }, []);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    const themeColor = isLoading
      ? "var(--yellow)" // Change theme-color to yellow while loading
      : theme === "dark"
      ? "#272727"
      : "#ffffff"; // Normal theme colors

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColor);
    } else {
      const meta = document.createElement("meta");
      meta.name = "theme-color";
      meta.content = themeColor;
      document.head.appendChild(meta);
    }
  }, [theme, isLoading]); // Update when theme or loading state changes

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Portfolio.png" sizes="any" />
        <meta name="theme-color" content="#272727" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#272727" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-5 md:px-0 overflow-x-hidden`}
      >
        <ThemeProvider>
          <HeroUIProvider>{isLoading ? <Loader /> : children}</HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
