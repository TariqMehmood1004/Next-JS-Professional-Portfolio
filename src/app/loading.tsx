
"use client";
import { motion } from "framer-motion";

import React from 'react'
import Image from 'next/image'
import UserCard from "../Components/User-Card";

const Loader = () => {
  return (
    <section className='fixed top-0 left-0 p-16 w-full h-full bg-[var(--primary)] z-50 flex items-center justify-center'>
        <div className='relative w-full h-full bg-[var(--yellow)] rounded-4xl p-12'>
          
          {/* rounded badges */}
          <div className="flex items-center group cursor-pointer transition-all duration-300 absolute top-8 left-6 w-fit h-20 px-3 rounded-full bg-black">
            {/* show details card */}
            <UserCard />

            <div className="flex items-center gap-1">             
              <div className="w-[70px]">
                <Image
                  src="/Portfolio.png"
                  alt="Tariq Mehmood - Software Engineer"
                  width={60}
                  height={60}
                  className='rounded-full object-cover bg-[var(--yellow)]'
                  priority
                />
              </div>
              <div className="text-white text-4xl font-bold">Portfolio</div>
              <span className='w-2 h-2 rounded-full bg-[var(--yellow)] ml-2'></span>
            </div>
          </div>

          {/* Custom Loader Animations */}
          <div className="flex items-center justify-center">
            {/* First Div */}
            <motion.div
              initial={{ width: "10rem" }}
              animate={{ width: "13rem" }}
              transition={{
                duration: 0.6,
                delay: 0,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center absolute top-[47%] left-[47%] transform -translate-x-[50%] -translate-y-[50%] -rotate-[55deg] h-16 px-3 rounded-full bg-black overflow-hidden"
            ></motion.div>

            {/* Second Div */}
            <motion.div
              initial={{ width: "18rem" }} // w-72
              animate={{ width: "20rem" }} // w-80
              transition={{
                duration: 0.6,
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center absolute top-1/2 left-[50%] transform -translate-x-[50%] -translate-y-[50%] -rotate-[55deg] h-16 px-3 rounded-full bg-black overflow-hidden"
            ></motion.div>

            {/* Third Div */}
            <motion.div
              initial={{ width: "13rem" }} // w-52
              animate={{ width: "18rem" }} // w-72
              transition={{
                duration: 0.6,
                delay: 2.5, // 2 second baad start hoga
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="flex items-center absolute top-[50%] left-[54%] transform -translate-x-[50%] -translate-y-[50%] -rotate-[55deg] h-16 px-3 rounded-full bg-black overflow-hidden"
            ></motion.div>
          </div>

          {/* rounded badges */}
          <div className="flex items-center absolute bottom-8 right-6 w-fit h-20 px-5 rounded-full bg-transparent overflow-hidden">
            <div className="flex items-center gap-1">
              <span className='w-2 h-2 rounded-full bg-[var(--primary)] mr-2'></span>
              <div className="text-black text-3xl font-bold">Tariq Mehmood</div>
              <span className='w-2 h-2 rounded-full bg-[var(--primary)] ml-2'></span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Loader