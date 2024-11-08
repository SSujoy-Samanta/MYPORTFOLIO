'use client'
import { useState, useEffect } from 'react';
import { BoxProgress } from './Progress/BoxProcess';

export const SkillBox = ({max}:{
    max:number
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < max) {
        setPercentage((prev) => prev + 5);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <BoxProgress percentage={percentage} />
    </div>
  );
};


