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
        <div className="flex w-6/12 justify-evenly items-center px-1 font-bold">
            <div
                className={`cursor-pointer ${isActive('/') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/')}
            >
                Home
            </div>
            <div
                className={`cursor-pointer ${isActive('/about') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/about')}
            >
                About Me
            </div>
            <div
                className={`cursor-pointer ${isActive('/education') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/education')}
            >
                Education
            </div>
            <div
                className={`cursor-pointer ${isActive('/skills') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/skills')}
            >
                Skills
            </div>
            <div
                className={`cursor-pointer ${isActive('/projects') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/projects')}
            >
                Projects
            </div>
            <div
                className={`cursor-pointer ${isActive('/contact') ? 'border-b-4 border-blue-500' : ''}`}
                onClick={() => handleMenuClick('/contact')}
            >
                Contact
            </div>
        </div>
    );
}
