'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use `useRouter` for navigation in Next.js 13+
import { Initial } from './Initial';

const SplashScreen: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setFadeOut(true); 
    }, 4000); 

    const redirectTimer = setTimeout(() => {
      router.push('/home'); 
    }, 4000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="logo">
        <Initial />
      </div>
    </div>
  );
};

export default SplashScreen;
