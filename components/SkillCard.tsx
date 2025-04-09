import React from 'react';
import { CircleProgressBar } from './Progress/CircleProgress';
import { useEffect, useState } from 'react';
import {motion} from "framer-motion"
export const SkillCard = ({
  max,
  children
}: {
  max: number;
  children: React.ReactNode;
}) => {
  const [percentage, setPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(max);
    }, 300);
    return () => clearTimeout(timer);
  }, [max]);

  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }
  };

  const childrenVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.3 } }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.6, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="relative flex justify-center flex-col items-center h-full w-full rounded-xl bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-sm p-4 overflow-hidden"
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 blur-md"
        variants={glowVariants}
      />
      
      {/* Progress circle */}
      <motion.div 
        className="z-10 mb-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CircleProgressBar percentage={percentage} />
      </motion.div>
      
      {/* Skill content */}
      <motion.div 
        className="flex justify-center flex-col items-center w-full gap-2 z-10"
        variants={childrenVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
      
      {/* Border glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl border border-white/10"
        animate={{ 
          boxShadow: isHovered 
            ? "0 0 15px 2px rgba(255, 255, 255, 0.2)" 
            : "0 0 0px 0px rgba(255, 255, 255, 0)" 
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};