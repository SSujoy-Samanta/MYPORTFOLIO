import React from 'react';
import { CircleProgressBar } from './Progress/CircleProgress';
import { useEffect, useState } from 'react';
export const SkillCard = ({
  max,
  children
}: {
  max: number;
  children: React.ReactNode;
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
    }, [percentage,max]);
  return (
    <div className="flex justify-center flex-col items-center h-full w-full gap-1 ">
      {/* Example: a circular display of the max value */}
      <div className='pt-2'>
        <CircleProgressBar percentage={percentage}/>
      </div>
      
      {/* Render children inside the SkillCard */}
      <div className="flex justify-center flex-col items-center h-full w-full gap-1">
        {children}
      </div>
    </div>
  );
};
