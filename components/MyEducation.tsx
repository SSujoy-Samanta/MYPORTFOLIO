'use client'
import React, { useEffect, useState } from "react";
import { Journey } from "./Journey";
import { ExperienceModal } from "./Experience";
import { motion } from "framer-motion";


export const MyEducation = () => {
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


  return (
    <motion.div
      className="space-y-10 mx-auto md:min-w-7xl px-1"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Header */}
      {<motion.div variants={itemVariants} className="text-center">
        <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider text-teal-400 uppercase bg-teal-900/30 rounded-full">Explore The Path</span>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">My Journey</h2>
      </motion.div>}
      <section id="education-experience" className="text-white py-5 px-4 md:px-16 w-full ">
        
        <div className="w-full mx-auto text-center">
          {/* Education Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-x-20">
            <div className="col-span-1">
              <div className="flex justify-start flex-col animate-slideInLeft">
                <h2 className="text-3xl mb-8 bg-gradient-to-b from-amber-200 to-amber-700 bg-white bg-clip-text font-black tracking-tighter text-transparent">Education</h2>
                <div >
                  <Journey />
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-5 md:mt-0 animate-slideInRight">
              <h2 className="text-3xl mb-8 bg-gradient-to-b from-blue-200 to-blue-700 bg-white bg-clip-text font-black tracking-tighter text-transparent">Experience</h2>
              <div>
                <ExperienceModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
    
  );
};
