'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/project';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { useRouter } from 'next/navigation';



export const MyProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router=useRouter();
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
      className="space-y-10 mx-auto w-full px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Header */}
      {<motion.div variants={itemVariants} className="text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-wider text-teal-400 uppercase bg-teal-900/30 rounded-full">Browse My Recent</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">Projects</h2>
      </motion.div>}
      <section id="projects" className="py-5 md:px-8 text-white">
        <div className="max-w-6xl mx-auto">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 aspect-auto object-cover p-1 opacity-80 rounded-md"
                />
                <div className="p-5 space-y-4">
                  <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-teal-500 text-xs text-center px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <p
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-teal-400 hover:underline"
                  >
                    View Project
                  </p>
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-teal-700 to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300"
                  
                > 
                  <div className='flex h-full justify-center mx-auto items-end'>
                      <div className='w-full flex justify-around  py-2'>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex flex-col items-center justify-center">
                              <img
                                  src='github.svg'
                                  alt='github'
                                  style={{ width: "50px", height: "50px" }}
                                  className="slider-image aspect-auto object-contain p-1 rounded-2xl "
                              />
                          </a>
                          {
                              project.link && <div className='py-4'>
                                  <PrimaryButton onClick={()=>{
                                    router.push(`${project.link}`);
                                  }}>Demo</PrimaryButton>
                              </div>
                          }
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
    
  );
};


