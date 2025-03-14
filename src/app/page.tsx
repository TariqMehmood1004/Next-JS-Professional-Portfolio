"use client";

import DownRightArrowIcon from "@/Components/Icons/DownRightArrowIcon";
import ThemeSwitcher from "@/Components/ThemeToggleButton";
import Link from 'next/link'
import Image from 'next/image'
import ImagePreview from "@/Components/ImagePreview";

export default function Home() {

  return (
    <div className="w-full h-screen font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">
      <section className="">
        <header className="w-full p-8 flex md:flex-row flex-col justify-between items-center gap-10">
          
          <Link href="/" className="text-2xl md:text-4xl font-medium text-neutral-600 hover:text-neutral-800 transition-all duration-300 uppercase">
            johnbrrighte@engineer.com
          </Link>

          <div className="text-2xl md:text-3xl p-3 px-6 flex gap-10 items-center font-normal text-neutral-500 hover:text-neutral-600 transition-all duration-300 uppercase">
            <DownRightArrowIcon size={32} color="#cdcdcd" />
            <span className="w-60">Multi-talented Programmer</span>
          </div>

          <ThemeSwitcher />
        </header>
      </section>

      <section className="relative w-full flex items-center justify-center">
        <Link target="_blank" href="https://www.google.com/search?sca_esv=723ced2f111b1066&rlz=1C1KNTJ_enPK1090FR1090&sxsrf=AHTn8zrjZNkUqEM5TFjJyY_VhJ6oRbx2eQ:1741967236599&q=Tariq+Mehmood+Senior+Full+Stack+developer&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z44LBK6yTXN_5587Z3ya9D7DSaxM-14xIFnNO9Sk1S85fY2GfYW0RRt6GYvk_xlnxEntwZgIuzkCE92LFDc4x4cf9hDr-vvAXXukd-I6DuozV1EUDhYecHl7ECeJhl_Lh-c1ECJ&sa=X&ved=2ahUKEwi87-PS9YmMAxXCgP0HHS-iMpgQtKgLegQIDhAB" className="text-2xl md:text-4xl border-2 border-[#171717] rounded-full p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">Creative Developer</Link>
        <Link target="_blank" href="http://github.com/TariqMehmood1004/" className="absolute left-[35%] top-20 text-2xl md:text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">GitHub</Link>
        <Link target="_blank" href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/" className="absolute left-[45%] top-40 md:top-28 text-2xl md:text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">LinkedIn</Link>
        <Link target="_blank" href="https://www.instagram.com/i__am__tariq__mehmood/" className="absolute left-[25%] top-60 md:top-44 text-2xl md:text-4xl border-2 border-[#171717] rounded-full p-4 px-6 font-medium hover:bg-[#171717] hover:text-white hover:font-normal transition-all duration-300 uppercase">Instagram</Link>
      </section>

      <section className="profile-picture mt-60 md:my-40 md:mx-auto w-full md:p-10 flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-7xl md:text-[10rem]  flex justify-center items-end gap-5">
            <span>Portfolio</span>
            <span className="w-3 h-3 bg-blue-500 rounded-full motion-safe:animate-spin"></span>
          </h1>
          <p className="text-lg font-normal px-0 md:px-10">
            I’m a 𝐝𝐲𝐧𝐚𝐦𝐢𝐜 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐚 𝐟𝐥𝐚𝐢𝐫 𝐟𝐨𝐫 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬. With expertise in C#, ASP.NET, Flutter, and a 𝐬𝐨𝐥𝐢𝐝 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐃𝐚𝐭𝐚 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 using Python and R, I bring a unique blend of 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐚𝐧𝐝 𝐚𝐧 𝐞𝐲𝐞 𝐟𝐨𝐫 𝐝𝐞𝐭𝐚𝐢𝐥. As a dedicated Machine Learning enthusiast, I thrive on pushing the boundaries of technology and continually challenge myself to create impactful solutions. In addition to my technical abilities, I’m deeply committed to sharing my knowledge as 𝐚 𝐧𝐚𝐭𝐢𝐯𝐞 𝐬𝐩𝐞𝐚𝐤𝐞𝐫 𝐚𝐧𝐝 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐭𝐞𝐚𝐜𝐡𝐞𝐫, empowering others to embrace the ever-evolving field of software engineering. My commitment to transforming ideas into impactful solutions speaks volumes about my unwavering dedication to the craft.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="">
            <Image
                src="/tariq-mehmood/Tariq Mehmood.jpg"
                id="image"
                alt="Profile Picture"
                width={500}
                height={500}
                className="xm:w-50 xm:h-50 animate-pulse hover:scale-[1.1] transition-all duration-300 rounded-full object-cover"
              />
          </div>
        </div>

      </section>
    </div>
  );
}
