import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface DescriptionModalProps {
  title?: string;
  shortDescription: string;
  fullDescription: string;
}

export default function DescriptionModal({ 
  title = "", 
  shortDescription, 
  fullDescription 
}: DescriptionModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Shortened Text with Read More Link */}
      <p className="w-full text-sm md:text-2xl text-center md:text-left font-normal px-0 md:px-10">
        {shortDescription}
        <Link href="#" onClick={toggleModal} className="text-bold italic text-indigo-600 hover:underline m-2 transition-all duration-300">
          Read more
        </Link>
      </p>

      {/* Modal with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#171717] z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-lg p-5 md:p-10 w-11/12 md:w-1/2 shadow-lg relative"
              initial={{ y: "-50%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-50%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <button onClick={toggleModal} className="cursor-pointer absolute top-2 right-4 text-gray-600 hover:text-red-500 text-2xl">
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4 text-left">{title}</h2>
              <p className="text-gray-700 text-sm md:text-2xl">{fullDescription}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
