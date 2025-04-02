import React, { useState, useEffect } from 'react';
import { allInstitutes, Institute } from "@/lib/data";

export const Journey = () => {
  // Fix: Initialize with proper typing for the state array
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState<number[]>([]);
  
    useEffect(() => {
      // Create staggered animation effect on load
      const timer = setTimeout(() => {
        allInstitutes.forEach((_, index) => {
          setTimeout(() => {
            setVisible(prev => [...prev, index]);
          }, index * 400);
        });
      }, 300);
      
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="flex relative gap-8 py-8">
      {/* Animated Vertical Line */}
      <div className="h-full w-1 bg-gradient-to-b from-sky-400 to-purple-600 rounded-full absolute left-4 shadow-lg shadow-sky-400/20">
        <div className="absolute w-full h-full bg-white/20 animate-pulse"></div>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-col ml-12 space-y-12 w-full">
        {allInstitutes.map((x: Institute, inx: number) => (
          <div 
            key={inx} 
            className={`relative group transform transition-all duration-700 ease-out ${
              visible.includes(inx) 
                ? "translate-x-0 opacity-100" 
                : "translate-x-24 opacity-0"
            }`}
          >
            {/* Pulsing Circle Indicator */}
            <div className="absolute -left-10 top-4">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 z-10 relative flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75 ${activeIndex === inx ? 'opacity-90' : 'opacity-40'}`}></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
            </div>

            {/* Content Box */}
            <div className="lg:p-6 p-2 border-l-4 border-sky-500 rounded-lg shadow-xl ml-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30 group-hover:scale-105">
              
              {/* Floating particles background effect */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full bg-white"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
              
              {/* Time period with gradient text */}
              <div className="flex gap-2 mb-4">
                <div className="p-2 rounded-md bg-sky-900/50 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-cyan-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-teal-300 font-bold text-lg flex items-center">
                  {x.starting} - {x.ending}
                </p>
              </div>
              
              {/* Education details with enhanced typography */}
              <div className="flex flex-col w-full gap-3 text-gray-300 backdrop-blur-sm">
                <div className="flex items-baseline gap-2 group/item transition-all duration-300 hover:translate-x-1">
                  <strong className="text-amber-500 font-bold">Degree:</strong>
                  <p className="text-lg">{x.degree}</p>
                </div>
                
                <div className="flex items-baseline gap-2 group/item transition-all duration-300 hover:translate-x-1">
                  <strong className="text-amber-500 font-bold">Institute:</strong>
                  <p className="text-lg">{x.name}</p>
                </div>
                
                <div className="flex items-baseline gap-2 group/item transition-all duration-300 hover:translate-x-1">
                  <strong className="text-amber-500 font-bold">Percentage:</strong>
                  <p className="text-lg font-semibold">{x.percentage}</p>
                </div>
                
                <div className="flex flex-col gap-1 mt-2 border-t border-sky-800/50 pt-3">
                  <strong className="text-amber-500 font-bold mb-1">Description:</strong>
                  <p className="text-gray-300 leading-relaxed">{x.details}</p>
                </div>
              </div>
              
              {/* Interactive hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/40 to-purple-500/40 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-in-out"></div>
              
              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rotate-12 transform origin-bottom-left opacity-70"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add some global styles for the animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default Journey;