'use client';

interface StepCardProps {
  num: number;
  title: string;
  points: string[];
  icon: React.ReactNode;
}

export default function StepCard({ num, title, points, icon }: StepCardProps) {
  return (
    <div className="relative z-10 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 p-6 rounded-xl group hover:bg-slate-700 transition-all">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="text-xs font-bold text-blue-400 mb-2">STEP 0{num}</div>
      <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" /> 
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
