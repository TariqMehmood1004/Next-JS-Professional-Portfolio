
"use client";
import { motion } from "framer-motion";

import React from 'react'
import Image from 'next/image'
import UserCard from "../Components/User-Card";

const Loader = () => {  
  return (
    <section className='fixed top-0 left-0 p-0 md:p-16 w-full h-full bg-[var(--primary)] z-50 flex items-center justify-center'>
        <div className='relative w-full h-full bg-[var(--yellow)] md:rounded-4xl md:p-12'>
          
          {/* rounded badges */}
          <div className="flex items-center group cursor-pointer transition-all duration-300 absolute top-8 left-6 md:w-fit h-12 md:h-20 px-3 rounded-full bg-black">
            {/* show details card */}
            <UserCard />

            <div className="flex items-center justify-center gap-2">             
              <div className="w-[30px] md:w-[70px]">
                <Image
                  src="/Portfolio.png"
                  alt="Tariq Mehmood - Software Engineer"
                  width={60}
                  height={60}
                  className='rounded-full w-8 h-8 md:w-16 md:h-16 object-cover bg-[var(--yellow)]'
                  priority
                />
              </div>
              <div className="text-white text-lg md:text-4xl font-bold">Portfolio</div>
              <span className='w-2 h-2 rounded-full bg-[var(--yellow)] ml-2'></span>
            </div>
          </div>

          {/* Custom Loader Animations */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-3 -rotate-[55deg]">
              {/* First Div */}
              <motion.div
                initial={{ width: "5rem" }}
                animate={{ width: "8rem" }}
                transition={{
                  duration: 0.6,
                  delay: 0,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center h-12 md:h-16 px-3 rounded-full bg-black overflow-hidden"
              ></motion.div>

              {/* Second Div */}
              <motion.div
                initial={{ width: "13rem" }} // w-72
                animate={{ width: "16rem" }} // w-80
                transition={{
                  duration: 0.6,
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center h-12 md:h-16 px-3 rounded-full bg-black overflow-hidden"
              ></motion.div>

              {/* Third Div */}
              <motion.div
                initial={{ width: "5rem" }} // w-52
                animate={{ width: "8rem" }} // w-72
                transition={{
                  duration: 0.6,
                  delay: 2.5, // 2 second baad start hoga
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex items-center h-12 md:h-16 px-3 rounded-full bg-black overflow-hidden"
              ></motion.div>
            </div>
          </div>

          {/* rounded badges */}
          <div className="flex items-center absolute bottom-8 right-6 w-fit h-20 px-5 rounded-full bg-transparent overflow-hidden">
            <div className="flex items-center gap-1">
              <span className='w-2 h-2 rounded-full bg-[var(--primary)] mr-2'></span>
              <div className="text-black text-lg md:text-3xl font-bold">Tariq Mehmood</div>
              <span className='w-2 h-2 rounded-full bg-[var(--primary)] ml-2'></span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Loader