'use client'

import { skills } from '@/lib/data';
import { useEffect, useState } from 'react';
import { SkillCard } from './SkillCard';
import { SkillBox } from './SkillBox';
import { motion } from "framer-motion";


export const MySkills = () => {
  const [showTechnical, setShowTechnical] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(()=>{
    if(!isVisible){
      setIsVisible(true);
    }
  },[])

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
  };
  

  useEffect(() => {
    const timer = setTimeout(() => setShowTechnical(true), 500); // Show technical skills after 500ms
    const timer2 = setTimeout(() => setShowProfessional(true), 1000); // Show professional skills after 1000ms
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      className="space-y-10 mx-auto md:min-w-7xl px-1"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Header */}
      {<motion.div variants={itemVariants} className="text-center">
        <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider text-teal-400 uppercase bg-teal-900/30 rounded-full">Explore My </span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">Skills</h2>
      </motion.div>}
        <section id="skills" className="py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-12">
            {/* Technical Skills */}
            <div className=" p-6 bg-slate-800 bg-opacity-50 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 lg:col-span-4 animate-slideInLeft z-20">

              <h3 className="text-2xl bg-gradient-to-b from-purple-200 to-purple-700 bg-white bg-clip-text font-black tracking-tighter text-transparent mb-6 text-center">
                Technical Skills
              </h3>
            
              <ul className={`list-none ${showTechnical ? 'fadeIn' : ''} transition-all duration-1000 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 md:gap-2 overflow-auto scrollbar h-svh  pt-2`}>
                {skills.technical.map((skill, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-600 mb-3 text-center animate__animated animate__fadeIn animate__delay-0.5s"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className=" inline-block h-52 w-52 rounded-md bg-gradient-to-r from-pink-500/85 via-red-500/85 to-orange-500/85 text-white font-medium shadow-lg transform hover:scale-110 transition-all duration-300">
                      
                      <SkillCard max={skill.percentage}>
                          <img
                              src={skill.img}
                              alt={skill.img}
                              style={{ width: "50px", height: "50px" }}
                              className="slider-image aspect-auto object-contain rounded-2xl "
                          />
                          <p className='text-gray-700 font-normal'>{skill.name}</p>
                      </SkillCard>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Skills */}
            <div className="overflow-auto md:h-4/6 h-full p-6  bg-indigo-800 bg-opacity-50 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 lg:col-span-2 animate-slideInUp z-20">
              <h3 className="text-2xl bg-gradient-to-b from-cyan-200 to-cyan-700 bg-white bg-clip-text font-black tracking-tighter text-transparent mb-6 text-center">
                Professional Skills
              </h3>
              <ul className={`list-none ${showProfessional ? 'fadeIn' : ''} transition-all duration-1000`}>
                {skills.professional.map((skill, index) => (
                  <li
                    key={index}
                    className="text-lg text-gray-600 mb-3 text-center animate__animated animate__fadeIn animate__delay-1s"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="inline-block w-5/6 p-2 mx-auto rounded-md bg-gradient-to-r from-green-500/80 via-yellow-500/80 to-red-500/80 text-black font-medium shadow-lg transform hover:scale-110 transition-all duration-300 ">
                      <div className='flex justify-start flex-col items-start'>
                          <p>{skill.name}</p>
                          <div className='w-full'> <SkillBox max={skill.percentage}/></div>
                      </div>
                    </div>
                  </li>
                
                ))}
              </ul>
            
            </div>
          </div>
        </div>
      </section>
    </motion.div> 
    
  );
};




