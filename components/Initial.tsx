'use client'
import { useEffect, useState } from "react";

export const Initial = () => {
    // Enhanced state management with multiple animation states
    const [animationState, setAnimationState] = useState("initial");

    useEffect(() => {
        // Create a more elaborate animation sequence
        const sequence = [
            { state: "letter-reveal", delay: 0 },
            { state: "pulse-glow", delay: 2000 },
        ];

        // Set up the animation sequence with timeouts
        const timers = sequence.map(({ state, delay }) => 
            setTimeout(() => setAnimationState(state), delay)
        );
        
        // Clean up all timers on unmount
        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <div className="relative flex items-center justify-center h-screen w-full bg-slate-900 overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400 filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500 filter blur-3xl animate-pulse"></div>
            </div>
            
            {/* Main portfolio text */}
            <div className="relative flex justify-center items-center z-10">
                <div className={`flex justify-center items-end gap-1 ${animationState} text-4xl md:text-7xl`}>
                    {["P", "o", "r", "t", "f", "o", "l", "i", "o"].map((letter, index) => (
                        <p 
                            key={index} 
                            className="transform transition-all duration-700 relative"
                            style={{ 
                                animationDelay: `${index * 0.2}s`,
                                transform: animationState === "float" ? `translateY(${Math.sin(index) * 8}px)` : "none"
                            }}
                        >
                            {letter}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}