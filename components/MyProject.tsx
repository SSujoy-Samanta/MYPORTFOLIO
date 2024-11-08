'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/project';



export const MyProjects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-gradient-to-r from-sky-600/50  to-cyan-600/50 text-white">
      <div className="max-w-6xl mx-auto">
        <div className='flex justify-center items-center gap-1 flex-col'>
            <p className="font-lg text-gray-800 font-bold">Browse My Recent</p>
            <h2 className="text-4xl font-bold text-center mb-10 text-teal-400">Projects</h2>
            <p className="text-lg text-center mb-12 text-gray-300">A showcase of my work that demonstrates my skills and creativity in various web development projects.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-teal-400 hover:underline"
                >
                  View Project
                </a>
              </div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-teal-700 to-transparent opacity-0 hover:opacity-90 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


