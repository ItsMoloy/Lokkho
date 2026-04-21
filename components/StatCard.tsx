'use client';

import { useEffect, useState } from 'react';

interface StatCardProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const StatCard = ({ end, suffix = '', prefix = '', label, duration = 2000 }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = currentTime - startTime;
      
      if (progress < duration) {
        const currentCount = Math.floor((progress / duration) * end);
        setCount(currentCount);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Start animation when component comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrame = requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, duration, label]);

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{ boxShadow: 'var(--box-shadow)' }}
    >
      <div 
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color: 'var(--primary-violet)' }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
