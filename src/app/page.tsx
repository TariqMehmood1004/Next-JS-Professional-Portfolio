"use client";

import DownRightArrowIcon from "@/Components/Icons/DownRightArrowIcon";
import ThemeSwitcher from "@/Components/ThemeToggleButton";
import Link from 'next/link'

export default function Home() {
  return (
    <div id="background-image" className="w-full h-screen font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">
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
        <Link target="_blank" href="https://www.google.com/search?sca_esv=723ced2f111b1066&rlz=1C1KNTJ_enPK1090FR1090&sxsrf=AHTn8zrjZNkUqEM5TFjJyY_VhJ6oRbx2eQ:1741967236599&q=Tariq+Mehmood+Senior+Full+Stack+developer&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z44LBK6yTXN_5587Z3ya9D7DSaxM-14xIFnNO9Sk1S85fY2GfYW0RRt6GYvk_xlnxEntwZgIuzkCE92LFDc4x4cf9hDr-vvAXXukd-I6DuozV1EUDhYecHl7ECeJhl_Lh-c1ECJ&sa=X&ved=2ahUKEwi87-PS9YmMAxXCgP0HHS-iMpgQtKgLegQIDhAB" className="text-4xl border-2 border-[#171717] rounded-full p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">Creative Developer</Link>
        <Link target="_blank" href="http://github.com/TariqMehmood1004/" className="absolute left-[35%] top-20 text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">GitHub</Link>
        <Link target="_blank" href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/" className="absolute left-[45%] top-28 text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">LinkedIn</Link>
        <Link target="_blank" href="https://www.instagram.com/i__am__tariq__mehmood/" className="absolute left-[25%] top-44 text-4xl border-2 border-[#171717] rounded-full p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">Instagram</Link>
      </section>
    </div>
  );
}
