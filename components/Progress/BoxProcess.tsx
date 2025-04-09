import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

export const BoxProgress: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="w-full bg-slate-700 rounded-md h-4" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};
