'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
interface ThemeProps{
    children:React.ReactNode,
    className?:string,
}
export const Theme = ({children,className}:ThemeProps) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

            },
            { threshold: 0.1 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    const hexToRgb = (hex:string) => {
        hex = hex.replace(/^#/, ""); // Remove the # if present
        if (hex.length === 3) {
          hex = hex.split("").map((char) => char + char).join(""); // Convert 3-digit hex to 6-digit
        }
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    };

    const techLogos = [
        { name: "C", icon: "c.svg", color: "#A8B9CC" },
        { name: "Java", icon: "java.svg", color: "#007396" },
        { name: "Solana", icon: "solana.svg", color: "#14F195" },
        { name: "Rust", icon: "rust.png", color: "#DEA584" },
        { name: "Ethereum", icon: "ethereum.png", color: "#627EEA" },
        { name: "Solidity", icon: "solidity.svg", color: "#363636" },
        { name: "PostgreSQL", icon: "postgress.svg", color: "#336791" },
        { name: "MongoDB", icon: "mongo.svg", color: "#47A248" },
        { name: "TypeScript", icon: "ts.svg", color: "#3178C6" },
        { name: "JavaScript", icon: "js.svg", color: "#F7DF1E" },
        { name: "React", icon: "react.svg", color: "#61DAFB" },
        { name: "GitHub", icon: "github.svg", color: "#181717" },
        { name: "Docker", icon: "docker.svg", color: "#2496ED" },
    ];


    return (
        <section 
            id={"theme"} 
            ref={sectionRef}
            className="relative backface py-24 pt-10 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute w-96 h-96 rounded-full bg-purple-600 blur-3xl -top-20 -left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 rounded-full bg-blue-600 blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
                <div className="absolute w-64 h-64 rounded-full bg-teal-500 blur-3xl top-1/3 left-1/2 animate-pulse delay-700"></div>
            </div>
            
        {/* Blockchain nodes animation in background */}
        <div className="absolute inset-0 overflow-hidden">
            {techLogos.map((tech, i) => (
                <motion.img
                    src={`${tech.icon}`} 
                    key={i}
                    className="absolute w-12 h-12 rounded-full bg-teal-400 blur hover:blur-none transition-all duration-300 ease-in-out z-20"
                    whileHover={{
                        border:1,
                        borderColor:tech.color,
                        boxShadow: `0 0 30px rgba(${hexToRgb(tech.color)}, 0.7)`,
                        transition: { duration: 0.3 }
                    }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: 0.3 + Math.random() * 0.4,
                        animation: `floatNode ${3 + Math.random() * 5}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
                ))}
                {[...Array(10)].map((_, i) => (
                <div 
                    key={`line-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: 0,
                        right: 0,
                        opacity: 0.1 + Math.random() * 0.2,
                        animation: `pulseLine ${5 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
         </div>
        
        <div className={`${className}`}>
            <motion.div
                // className="space-y-12"
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </div>
        
        {/* Custom animation styles */}
        <style jsx>{`
            @keyframes floatNode {
            0%, 100% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(10px, 10px);
            }
            50% {
                transform: translate(15px, -5px);
            }
            75% {
                transform: translate(-5px, 15px);
            }
            }
            
            @keyframes pulseLine {
            0%, 100% {
                opacity: 0.05;
                transform: scaleY(1);
            }
            50% {
                opacity: 0.2;
                transform: scaleY(1.5);
            }
            }
        `}</style>
        </section>
    );
};