'use client'
import { useEffect, useState } from "react";

export default function Load(){
   
    const [className, setClassName] = useState("letter");

    useEffect(() => {
        const timer1 = setTimeout(() => {
          setClassName("animate-ping logo"); 
        }, 2000);
        const timer2 = setTimeout(() => {
            setClassName("back");
        }, 3000); // Change to 'third-class' after another 6 seconds (12 seconds total)
      
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center h-80  w-full ">
            {/* Text */}
            <div
                className="gap-1 relative flex justify-center items-center text-6xl font-bold"
            >
                <div className={`flex justify-center items-end gap-1 ${className} text-4xl md:text-7xl `}>
                    <p className="">P</p>
                    <p className="">o</p>
                    <p className="">r</p>
                    <p className="">t</p>
                    <p className="">f</p>
                    <p className="">o</p>
                    <p className="">l</p>
                    <p className="">i</p>
                    <p className="">o</p>
                </div>
            </div>
    
           
        
        </div>
    );

}