'use client'

import { skills } from '@/lib/data';
import { useEffect, useState, useRef } from 'react';
import { SkillCard } from './SkillCard';
import { motion, useInView } from "framer-motion";
import { SkillBox } from './SkillBox';

// Linear progress bar component for professional skills
// export const SkillBox = ({ max }: { max: number }) => {
//   const [width, setWidth] = useState(0);
//   const progressRef = useRef(null);
//   const isInView = useInView(progressRef, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       setWidth(max);
//     }
//   }, [isInView, max]);

//   return (
//     <div ref={progressRef} className="w-full h-2 bg-gray-800/60 rounded-full overflow-hidden">
//       <motion.div 
//         className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
//         initial={{ width: 0 }}
//         animate={{ width: `${width}%` }}
//         transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//       />
//     </div>
//   );
// };

export const MySkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { 
    once: true,
    margin: "-100px 0px" 
  });

  useEffect(() => {
    if (sectionInView) {
      setIsVisible(true);
    }
  }, [sectionInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3 + (i * 0.1),
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative overflow-hidden h-full"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16  z-10">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-wider text-teal-400 uppercase bg-teal-900/30 rounded-full shadow-lg shadow-teal-900/20">
          Expertise
        </span>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent pb-2">
          My Skills
        </h2>
        
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          
          {/* Technical Skills */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-8 relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-sm border border-slate-700/40 shadow-xl">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
                  Technical Skills
                </h3>
                <motion.div 
                  className="hidden md:block h-[2px] bg-gradient-to-r from-purple-500/60 to-transparent rounded-full w-1/3"
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.technical.map((skill, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="h-full flex justify-center"
                  >
                    <div className="w-full h-64 max-w-xs rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative h-full w-full flex justify-center items-center p-4">
                        <SkillCard max={skill.percentage}>
                          
                          <img
                            src={skill.img}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="object-contain rounded-md"
                          />
                          
                          <p className="text-white font-medium text-lg mt-2">{skill.name}</p>
                        </SkillCard>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/80 to-blue-800/70 backdrop-blur-sm border border-indigo-700/40 shadow-xl h-auto">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Professional Skills
                </h3>
                <motion.div 
                  className="hidden md:block h-[2px] bg-gradient-to-r from-cyan-500/60 to-transparent rounded-full w-1/3"
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </div>
              
              <div className="space-y-8">
                {skills.professional.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.15), duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="inline-block w-full p-4 mx-auto rounded-md bg-gradient-to-r from-green-500/80 via-yellow-500/80 to-red-500/80 text-black font-medium shadow-lg transform hover:scale-110 transition-all duration-300 ">
                        <div className='flex justify-start flex-col items-start ted'>
                            <p>{skill.name}</p>
                            <div className='w-full'> <SkillBox max={skill.percentage}/></div>
                        </div>
                      </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};