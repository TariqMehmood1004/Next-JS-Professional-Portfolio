"use client";

import DownRightArrowIcon from "@/Components/Icons/DownRightArrowIcon";
import ThemeSwitcher from "@/Components/ThemeToggleButton";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">
      <section className="">
        <header className="w-full p-8 flex justify-between items-center">
          
          <Link href="/" className="text-4xl font-medium text-neutral-600 hover:text-neutral-800 transition-all duration-300 uppercase">
            johnbrrighte@engineer.com
          </Link>

          <div className="text-3xl p-3 px-6 flex gap-10 items-center font-normal text-neutral-500 hover:text-neutral-600 transition-all duration-300 uppercase">
            <DownRightArrowIcon size={32} color="#cdcdcd" />
            <span className="w-60">Multi-talented Programmer</span>
          </div>

          <ThemeSwitcher />
        </header>
      </section>

      <section className="relative w-full flex items-center justify-center">
        <h2 className="text-4xl border-2 border-gray-900 rounded-full p-4 px-6 font-medium hover:bg-neutral-800 hover:text-slate-400 transition-all duration-300 uppercase">Creative Developer</h2>
        <h2 className="absolute left-[35%] top-20 text-4xl border-2 border-gray-900 rounded-lg p-4 px-6 font-normal hover:bg-neutral-800 hover:text-slate-400 transition-all duration-300 uppercase">GitHub</h2>
        <h2 className="absolute left-[45%] top-28 text-4xl border-2 border-gray-900 rounded-lg p-4 px-6 font-normal hover:bg-neutral-800 hover:text-slate-400 transition-all duration-300 uppercase">LinkedIn</h2>
        <h2 className="absolute left-[25%] top-44 text-4xl border-2 border-gray-900 rounded-full p-4 px-6 font-normal hover:bg-neutral-800 hover:text-slate-400 transition-all duration-300 uppercase">Instagram</h2>
      </section>
    </div>
  );
}
