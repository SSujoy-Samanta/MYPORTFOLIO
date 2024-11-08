'use client'

import { skills } from '@/lib/data';
import { useEffect, useState } from 'react';
import { CircleProgressBar } from './Progress/CircleProgress';
import { SkillCard } from './SkillCard';
import { SkillBox } from './SkillBox';


export const MySkills = () => {
  const [showTechnical, setShowTechnical] = useState(false);
  const [showProfessional, setShowProfessional] = useState(false);
  

  useEffect(() => {
    const timer = setTimeout(() => setShowTechnical(true), 500); // Show technical skills after 500ms
    const timer2 = setTimeout(() => setShowProfessional(true), 1000); // Show professional skills after 1000ms
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-blue-800/50 via-sky-500/50 to-teal-500/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className='flex justify-center items-center gap-1 flex-col'>
          <p className="font-lg text-gray-800 font-bold">Explore My </p>
          <h2 className="text-4xl font-bold text-center text-amber-700 mb-12 tracking-widest">
              Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6  gap-12">
          {/* Technical Skills */}
          <div className=" p-6 bg-slate-800 bg-opacity-50 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 lg:col-span-4 animate-slideInLeft">

            <h3 className="text-2xl font-semibold text-cyan-500 mb-6 text-center transform hover:text-amber-600 transition-all duration-300">
              Technical Skills
            </h3>
           
            <ul className={`list-none ${showTechnical ? 'fadeIn' : ''} transition-all duration-1000 grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 overflow-auto  h-svh  pt-2`}>
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
          <div className="overflow-auto h-4/6 p-6  bg-indigo-800 bg-opacity-50 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 lg:col-span-2 animate-slideInUp">
            <h3 className="text-2xl font-semibold text-cyan-500 mb-6 text-center transform hover:text-amber-600 transition-all duration-300">
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
  );
};




