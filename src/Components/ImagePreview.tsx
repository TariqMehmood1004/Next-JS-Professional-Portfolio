"use client";

import React from "react";
import Image from "next/image";

const ImagePreview = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  return (
    <section id="imageModal" className="modal">
      <div className="modal-backdrop fade dark:bg-[#171717]/90" onClick={onClose}>
          <div className="modal-box bg-transparent shadow-none flex justify-center items-center w-full max-w-6xl">
            <Image
              id="modalImage"
              src={src}
              width={800}
              height={500}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
      </div>
    </section>
  );
};

export default ImagePreview;