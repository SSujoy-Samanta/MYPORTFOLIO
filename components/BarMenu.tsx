'use client'

import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

export const BarMenu = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Function to check if a link is active
    const isActive = (path: string) =>pathname === path;

    const handleMenuClick = ( route: string) => {
        router.push(route); // Navigate to the desired route
    };

    return (
        <div className="xl:flex w-6/12 justify-evenly items-center px-1 font-bold hidden">
            <div
                className={`cursor-pointer ${isActive('/home') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'} `}
                onClick={() => handleMenuClick('/home')}
            >
                Home
            </div>
            <div
                className={`cursor-pointer ${isActive('/about') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'} `}
                onClick={() => handleMenuClick('/about')}
            >
                About Me
            </div>
            <div
                className={`cursor-pointer ${isActive('/education') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'}`}
                onClick={() => handleMenuClick('/education')}
            >
                Education
            </div>
            <div
                className={`cursor-pointer ${isActive('/skills') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'}`}
                onClick={() => handleMenuClick('/skills')}
            >
                Skills
            </div>
            <div
                className={`cursor-pointer ${isActive('/projects') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'}`}
                onClick={() => handleMenuClick('/projects')}
            >
                Projects
            </div>
            <div
                className={`cursor-pointer ${isActive('/contact') ? 'border-b-4 border-blue-500' : 'transform hover:scale-125 transition-all'}`}
                onClick={() => handleMenuClick('/contact')}
            >
                Contact
            </div>
        </div>
    );
}
