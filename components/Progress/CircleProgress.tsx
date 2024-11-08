import React from 'react';
interface CircularProgressProps {
    percentage: number;
}

export  const CircleProgressBar: React.FC<CircularProgressProps> = ({ percentage }) => {
    // Calculate stroke dasharray and dashoffset based on the percentage
    const radius = 40; // radius of the circle
    const strokeWidth = 10; // width of the stroke
    const circumference = 2 * Math.PI * radius; // circumference of the circle
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="flex justify-center items-center relative">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="transform rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3b82f6" // color of the progress
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute text-xl font-semibold text-blue-600">
          {percentage}%
        </div>
      </div>
    );
  };
  
  
  