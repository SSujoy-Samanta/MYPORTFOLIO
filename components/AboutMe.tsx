'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  // Tech categories for the animated skill bubbles
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    backend: ["Node.js", "Express", "Docker", "AWS"],
    blockchain: ["Solidity", "Rust", "Ethereum", "Solana", "Smart Contracts"],
    core: ["DSA", "OOP", "DevOps", "CI/CD"]
  };
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
      className="space-y-10 mx-auto max-w-5xl px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Header */}
      {<motion.div variants={itemVariants} className="text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider text-teal-400 uppercase bg-teal-900/30 rounded-full">Get To Know More</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">About Me</h2>
      </motion.div>}
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
            {/* Main content */}
            <div className="md:col-span-8 space-y-6">
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                Hi, I'm <span className="font-bold text-teal-400">Sujoy Samanta</span>, a passionate software engineer with expertise in full-stack web development and <span className="font-bold text-orange-400">blockchain technologies</span>. 
                I specialize in building modern, scalable applications with React, Next.js, and Node.js while also developing <span className="font-bold text-orange-400">smart contracts</span> on Ethereum and Solana.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                My journey in blockchain includes developing <span className="font-bold text-orange-400">decentralized applications (dApps)</span> using <span className="font-bold text-orange-400">Solidity</span> for Ethereum and <span className="font-bold text-orange-400">Rust</span> for Solana. I'm passionate about creating secure, efficient smart contracts and exploring innovative blockchain solutions.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                With a strong foundation in <span className="font-bold text-blue-400">Data Structures and Algorithms</span> and <span className="font-bold text-blue-400">Object-Oriented Programming</span>, I approach development challenges with analytical precision. My experience with <span className="font-bold text-purple-400">DevOps</span> tools like AWS, Docker, and Kubernetes ensures smooth deployment pipelines.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed">
                Beyond tech, I'm an athlete who enjoys cricket, football, and staying fit at the gym. I believe a healthy body fosters a creative mind. I also love traveling to experience new cultures and gain fresh perspectives that inspire my work.
              </motion.p>
            </div>
            
            {/* Skills bubbles */}
            <div className="md:col-span-4">
              <motion.div 
                variants={itemVariants}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-4">Tech Expertise</h3>
                
                {Object.entries(skills).map(([category, skillList], idx) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + (idx * 0.2) + (i * 0.1) }}
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            category === 'blockchain' 
                              ? 'bg-gradient-to-r from-orange-600/30 to-yellow-600/30 text-orange-300 border border-orange-500/20' 
                              : 'bg-slate-700/50 text-gray-300 border border-slate-600/50'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <button
              onClick={() => router.push('/contact')}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              <span className="relative flex items-center">
                Get in Touch
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </motion.div>
    </motion.div>
  );
};

