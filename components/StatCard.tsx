'use client';

import { useState, useEffect } from 'react';

interface StatCardProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCard({ end, suffix = '', label, duration = 2000 }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-300 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
