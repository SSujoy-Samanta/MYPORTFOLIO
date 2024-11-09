'use client'
import React, { useEffect, useState } from "react";
import { Journey } from "./Journey";
import { ExperienceModal } from "./Experience";

export const MyEducation = () => {
  const [hasAnimated, setHasAnimated] = useState(true);


  return (
    <section id="education-experience" className="bg-gradient-to-r from-black/50 to-blue-600/50 text-white py-16 px-4 md:px-16 w-full">
      <div className="w-full mx-auto text-center">
        <p className="font-lg text-gray-500 font-bold">Explore The Path</p>
        <h2 className="text-3xl font-semibold mb-12 text-teal-500">My Journey</h2>

        {/* Education Section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-x-20">
          <div className="col-span-1">
            <div className="flex justify-start flex-col animate-slideInLeft">
              <h2 className="text-3xl font-semibold mb-8 text-sky-500">Education</h2>
              <div className={hasAnimated ? "animate-slideInLeft" : ""}>
                <Journey />
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-5 md:mt-0 animate-slideInRight">
            <h2 className="text-3xl font-semibold mb-8 text-sky-500">Experience</h2>
            <div className={hasAnimated ? "animate-slideInRight" : ""}>
              <ExperienceModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
