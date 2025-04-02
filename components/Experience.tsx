import React, { useState, useEffect } from 'react';
import { Experience, MyExperience } from "@/lib/data";

export const ExperienceModal = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    // Create staggered animation effect on load
    const timer = setTimeout(() => {
      MyExperience.forEach((_, index) => {
        setTimeout(() => {
          setVisible(prev => [...prev, index]);
        }, index * 400);
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex relative gap-8 py-8 ">
      {/* Animated Vertical Line with flowing effect */}
      <div className="h-full w-1 bg-gradient-to-b from-sky-400 via-cyan-500 to-blue-600 rounded-full absolute left-4 shadow-lg shadow-sky-400/20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute h-24 w-full bg-white/40 animate-shine"></div>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-col ml-12 space-y-12 w-full">
        {MyExperience.map((x: Experience, idx: number) => (
          <div 
            key={idx} 
            className={`relative group transform transition-all duration-700 ease-out ${
              visible.includes(idx) ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
            }`}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Animated Circle Indicator */}
            <div className="absolute -left-10 top-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 z-10 relative flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75 ${activeIndex === idx ? 'opacity-90' : 'opacity-40'}`}></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Content Box with enhanced styling and animations */}
            <div className="p-6 border-l-4 border-sky-500 rounded-lg shadow-xl ml-4 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 group-hover:translate-y-1">
              {/* Glowing corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-500 opacity-75 rounded-br"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-500 opacity-75 rounded-tl"></div>
              
              {/* Background particle effects */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(15)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1 h-1 rounded-full bg-white"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 3}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Heading Section with modernized styling */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-cyan-600/30 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-cyan-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300 font-bold">
                  {x.starting} - {x.ending}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rotate-12 transform origin-bottom-left opacity-70"></div>

              {/* Experience Details with enhanced typography */}
              <div className="flex flex-col w-full gap-3">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 transform transition-all duration-300 group-hover:translate-x-1">
                  {x.subject}
                </h4>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="px-3 py-1 bg-sky-900/30 rounded-full text-sm font-medium text-sky-300">
                    {x.type}
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-400">{x.starting} - {x.ending}</span>
                </div>

                {/* Description List with animation */}
                <ul className="list-none w-full mt-4 text-gray-300 leading-relaxed flex flex-col justify-start gap-3">
                  {x.description.map((y: any, index: number) => (
                    <li 
                      key={index} 
                      className="text-start flex items-start gap-2 p-2 rounded hover:bg-sky-800/20 transition-all duration-300"
                    >
                      <div className="mt-1 text-cyan-500">•</div>
                      <span className="transform transition-all duration-300 group-hover:translate-x-1">{y.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced hover effect with directional gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/0 via-sky-600/10 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        
        @keyframes shine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        
        .animate-shine {
          animation: shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExperienceModal;