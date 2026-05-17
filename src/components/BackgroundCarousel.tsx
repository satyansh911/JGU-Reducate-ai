"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Using actual JG University photos from the public directory.
const IMAGES = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.JPG",
  "/photos/4.jpg"
];

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // 6 seconds per image
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark tint over images to ensure text readability and maintain glassmorphic vibe */}
      <div className="absolute inset-0 bg-background/60 z-10" />
      
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={IMAGES[currentIndex]}
          alt="JG University Campus"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
    </div>
  );
}
