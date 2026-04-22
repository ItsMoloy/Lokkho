'use client';

import { useEffect, useState, useRef } from 'react';

interface StatCardProps {
    end: number;
    duration?: number;
    label: string;
    suffix?: string;
}

export default function StatCard({ end, duration = 2000, label, suffix = '' }: StatCardProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
        <div
            ref={cardRef}
            className="p-8 rounded-2xl bg-white text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-50 flex flex-col items-center justify-center min-h-[160px]"
            style={{ boxShadow: '0 10px 30px -5px rgba(139, 92, 246, 0.1)' }}
        >
            <div className="text-4xl sm:text-5xl font-black mb-3 text-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>
                {count}{suffix}
            </div>
            <div className="text-gray-500 font-medium tracking-wide text-sm sm:text-base">
                {label}
            </div>
        </div>
    );
}
