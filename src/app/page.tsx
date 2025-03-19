"use client";

import { motion } from "framer-motion";
import DownRightArrowIcon from "@/Components/Icons/DownRightArrowIcon";
import ThemeSwitcher from "@/Components/ThemeToggleButton";
import Link from "next/link";
import Image from "next/image";
import MenuToggleButton from "@/Components/MenuToggleButton";
import { useState } from "react";
import ImagePreviewModal from "@/Components/ImagePreviewModal";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={pageVariants}
      className="w-full md:h-screen font-[family-name:var(--font-geist-sans)] flex flex-col gap-8"
    >
      <section>
        <header className="w-full p-8 flex md:flex-row flex-col justify-between items-center gap-10">
          <div className="w-full flex flex-col md:flex-row gap-10 items-center">
            <MenuToggleButton />
            <Link
              href="/"
              className="text-lg transition-all duration-300 md:text-4xl font-medium text-neutral-600 hover:text-[#474747] uppercase"
            >
              johnbrrighte@engineer.com
            </Link>
          </div>

          <div className="w-full cursor-pointer text-lg md:text-3xl p-3 px-6 flex gap-10 items-center font-normal text-neutral-500 hover:text-[#474747] uppercase transition-all duration-300">
            <DownRightArrowIcon size={32} color="#cdcdcd" />
            <span className="w-60">Multi-talented Programmer</span>
          </div>

          <ThemeSwitcher />
        </header>
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
        className="relative w-full flex items-center justify-center"
      >
        <Link
          target="_blank"
          href="https://www.google.com/search?..."
          className="text-lg md:text-4xl border-2 border-[#171717] rounded-full p-4 px-6 font-medium hover:bg-[#171717] hover:text-white transition-all duration-300 uppercase"
        >
          Creative Developer
        </Link>
        <Link
          target="_blank"
          href="http://github.com/TariqMehmood1004/"
          className="absolute left-[35%] top-20 text-lg md:text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white transition-all duration-300 uppercase"
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/"
          className="absolute left-[45%] top-40 md:top-28 text-lg md:text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium hover:bg-[#171717] hover:text-white transition-all duration-300 uppercase"
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/"
          className="absolute left-8 md:left-[50%] top-60 md:top-50 text-lg md:text-4xl border-2 border-[#171717] rounded-lg p-4 px-6 font-medium bg-[#272727] text-white hover:bg-[#373737] hover:text-white transition-all duration-300 uppercase"
        >
          Download Resume
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
        className="mt-60 md:my-40 md:mx-auto w-full md:p-10 pb-3 flex flex-col md:flex-row justify-center md:justify-end items-center gap-10"
      >
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl md:text-[12rem] flex justify-center items-end gap-5">
            <span className="font-bold">Portfolio</span>
            <motion.span
              className="w-3 h-3 md:w-5 md:h-5 bg-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </h1>
          <p className="text-sm md:text-2xl text-center md:text-left font-normal px-0 md:px-10">
            As a <strong>Machine Learning enthusiast</strong>, I thrive on pushing technological boundaries.
            Beyond development, I'm dedicated to <strong>knowledge sharing</strong>, empowering others as a <strong>mentor and educator</strong> in software engineering.
            My commitment to transforming ideas into reality reflects my <strong>drive for excellence and innovation</strong> in the ever-evolving tech landscape.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          {/* Clickable Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
            className="cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Image
              src="/tariq-mehmood/Tariq Mehmood.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              className="w-50 h-50 md:w-96 md:h-96 animate-pulse hover:scale-[1.1] transition-all duration-300 rounded-full object-cover"
            />
          </motion.div>

          {/* Show Modal if Open */}
          {isImageModalOpen && (
            <ImagePreviewModal
              imageUrl="/tariq-mehmood/Tariq Mehmood.jpg"
              onClose={() => setIsImageModalOpen(false)}
            />
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}
