"use client";

import DownRightArrowIcon from "@/Components/Icons/DownRightArrowIcon";
import ThemeSwitcher from "@/Components/ThemeToggleButton";
import Link from 'next/link'
import Image from 'next/image'
// import SkillsSection from "@/Components/Skills";

export default function Home() {

  return (
    <>
      <div className="w-full md:h-screen font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">
      
        <section>
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

        <section className="mt-60 md:my-40 md:mx-auto w-full md:p-10 pb-3 flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-6xl md:text-[12rem] flex justify-center items-end gap-5">
              <span className="font-bold">Portfolio</span>
              <span className="w-3 h-3 md:w-5 md:h-5 bg-blue-500 rounded-full motion-safe:animate-spin"></span>
            </h1>
            <p className="text-lg font-normal px-0 md:px-10">
              I'm a <b>versatile Software Engineer</b> with a passion for <b>innovation</b> and expertise in <b>C#, ASP.NET, Flutter, and Data Science</b> using <b>Python and R</b>. With a keen eye for <b>cutting-edge technologies</b>, I seamlessly blend <b>programming proficiency</b> with <b>attention to detail</b> to craft impactful solutions. As a <b>Machine Learning enthusiast</b>, 
              I thrive on pushing technological boundaries. Beyond development, 
              I'm dedicated to <b>knowledge sharing</b>, empowering others as a <b>mentor and educator</b> in software engineering. 
              My commitment to transforming ideas into reality reflects my <b>drive for excellence and innovation</b> in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <div>
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

      {/* <section className="w-full flex py-20">
        <div className="w-full gap-5">
          <h1 className="text-6xl md:text-[12rem] flex justify-center items-end gap-5">
            <span className="font-bold">Skills</span>
            <span className="w-3 h-3 md:w-5 md:h-5 bg-blue-500 rounded-full motion-safe:animate-spin"></span>
          </h1>
          <p className="text-lg font-normal px-0 md:px-10">
            As a <strong>Machine Learning enthusiast</strong>, I thrive on pushing technological boundaries.
            Beyond development, I'm dedicated to <strong>knowledge sharing</strong>, empowering others as a <strong>mentor and educator</strong> in software engineering.
            My commitment to transforming ideas into reality reflects my <strong>drive for excellence and innovation</strong> in the ever-evolving tech landscape.
          </p>
        </div>
        <SkillsSection />
      </section> */}
    </>
  );
}
