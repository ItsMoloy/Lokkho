import { FaCheckCircle } from 'react-icons/fa';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const StepCard = ({ stepNumber, title, description, icon }: StepCardProps) => {
  return (
    <div className="glass-card modern-card rounded-xl p-6 relative">
      {/* Step Number */}
      <div 
        className="absolute -top-4 -left-4 w-12 h-12 gradient-purple-magenta rounded-full flex items-center justify-center text-white font-bold text-lg animate-float"
      >
        {stepNumber}
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'var(--light-purple)' }}
        >
          <div style={{ color: 'var(--primary-purple)' }}>
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 
        className="text-xl font-semibold mb-3 text-center"
        style={{ 
          fontFamily: 'Playfair Display, serif',
          color: 'var(--dark-charcoal)'
        }}
      >
        {title}
      </h3>
      
      <ul className="space-y-2">
        {description.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <FaCheckCircle 
              className="mt-1 flex-shrink-0"
              style={{ color: 'var(--accent-orange)' }}
            />
            <span className="text-gray-600 text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepCard;
