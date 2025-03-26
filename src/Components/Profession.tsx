"use client";

import { motion } from 'framer-motion'
import { useState } from "react";
import Image from "next/image";
import ImagePreviewModal from './ImagePreviewModal';
import { Link } from '@heroui/react';
import BoxContainer from './BoxContainer';
import LocationIcon from './Icons/LocationIcon';
import ShieldCheckIcon from './Icons/ShieldIcon';
import ShieldFilledIcon from './Icons/ShieldFilledCheckIcon';
import TreeIcon from './Icons/TreeIcon';
import DescriptionModal from './DescriptionModal';


const Profession = () => {

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <div className='w-full md:h-screen flex items-start justify-center py-16'>
      <section 
        className='flex flex-col items-start justify-center container max-auto gap-5 md:gap-10'
        >
          {/* Show Modal if Open */}
          {isImageModalOpen && (
            <ImagePreviewModal
              imageUrl="/tariq-mehmood/Tariq.jpg"
              onClose={() => setIsImageModalOpen(false)}
            />
          )}
              
          <div className='left flex flex-col items-center md:items-start gap-5'>
            <h1 className="text-2xl md:text-5xl flex flex-col justify-center gap-5">
                <span className="font-bold">Professional Mentor</span>
            </h1>

            <div className="w-full flex flex-col md:flex-row items-center md:items-start">
              <motion.div
                  className="cursor-pointer w-full md:w-60 rounded-full flex items-center justify-center"
                  onClick={() => setIsImageModalOpen(true)}>
                  <Image
                    src="/tariq-mehmood/Tariq.jpg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="w-50 h-50 md:w-50 md:h-50 hover:scale-[1.06] transition-all duration-300 rounded-full object-cover"
                  />
              </motion.div>
              <DescriptionModal 
                shortDescription="As a dynamic Software Engineer with a flair for innovation and a passion for cutting-edge technologies, I bring a unique blend of programming skills and a keen eye for detail. Proficient in C#, ASP.NET, Flutter, ReactJS, React Native, Xamarin, Django, Laravel, PHP, and experienced in desktop and mobile development. Skilled in Microsoft SQL Server, MySQL, NoSQLite, MongoDB, Python, and R. My commitment to transforming ideas into impactful solutions reflects my unwavering dedication to the ever-evolving field of software engineering..."
                fullDescription="As a dynamic Software Engineer with a flair for innovation and a passion for cutting-edge technologies, I bring a unique blend of programming skills and a keen eye for detail. Proficient in C#, ASP.NET, Flutter, ReactJS, React Native, Xamarin, Django, Laravel, PHP, and experienced in desktop and mobile development. Skilled in Microsoft SQL Server, MySQL, NoSQLite, MongoDB, Python, and R. My commitment to transforming ideas into impactful solutions reflects my unwavering dedication to the ever-evolving field of software engineering."
              />
            </div>
          </div>
          
          <div className='right w-full flex flex-col md:flex-row items-center justify-end gap-4'>
            <BoxContainer icon={<LocationIcon />} title='Multan' description='I was recently working at KICS (Kabeer Institute of Computer Studies) as a teacher/professor.'  />
            <BoxContainer icon={<ShieldFilledIcon />} title='Standard Mentor' description='I am a YouTuber influencer & professional'  />
            <BoxContainer icon={<ShieldCheckIcon />} title='Vehari' description='My graduation done from COMSATS University Islamabad, Vehari campus'  />
            <BoxContainer icon={<TreeIcon />} title='Proficiency' description='Expertise in multi-domains'  />
          </div>
      </section>
    </div>
  )

  
}

export default Profession