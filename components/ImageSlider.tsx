import React from "react";
import { motion } from "framer-motion";

const images = [
  "c.svg",
  "python.svg",
  "java.svg",
  "cplus.svg",
  "solana.svg",
  "rust.png",
  "ethereum.png",
  "solidity.svg",
  "postgress.svg",
  "mongo.svg",
  "ts.svg",
  "js.svg",
  "nextjs.svg",
  "react.svg",
  "github.svg",
  "docker.svg",
  "aws.svg",
  "cricket.svg",
];

// Duplicate the images to ensure seamless looping
const duplicatedImages = [...images, ...images];

export default function ImageSlider() {
  return (
    <div className="w-full overflow-hidden relative">
      {/* Left and Right fade effect */}
      <div className="absolute left-0 top-0 bottom-0 h-full  w-10 md:w-32 bg-gradient-to-r from-30% from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 h-full  w-10 md:w-32 bg-gradient-to-l from-30% from-black to-transparent z-10"></div>
      <div className="absolute right-0 left-0 top-0 bottom-0 h-full w-full bg-gradient-to-r from-black/50 via-blue-800/50 to-black/35 z-0 blur-md"></div>

      {/* Infinite Scrolling Slider */}
      <motion.div
        className="flex py-8 min-w-max"
        animate={{
          x: ["0%", "-50%"], // Moves only half of the duplicated list
        }}
        transition={{
          ease: "linear",
          duration: 20, // Adjust speed (lower = faster)
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <motion.div key={index} className="flex-shrink-0 px-4"
            whileHover={{
              scale: 1.15,
              rotate: 5,
              filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-3 border border-gray-100">
              <img
                src={src}
                alt={`tech-${index}`}
                className="w-[70px] h-[70px] object-contain mix-blend-darken"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
