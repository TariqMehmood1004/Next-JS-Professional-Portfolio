"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImagePreviewModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function ImagePreviewModal({ imageUrl, onClose }: ImagePreviewModalProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Close modal on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-[#171717] z-50"
      onClick={onClose}
    >
      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition-all"
        >
          ✕
        </button>

        {/* Zoomable Image */}
        <motion.img
          src={imageUrl}
          alt="Preview"
          className="max-w-[90vw] max-h-[80vh] rounded-lg object-cover transition-transform duration-300"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </motion.div>
    </motion.div>
  );
}
