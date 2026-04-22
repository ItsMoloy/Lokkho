import { FaCheckCircle } from 'react-icons/fa';

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const StepCard = ({ stepNumber, title, description, icon }: StepCardProps) => {
  return (
    <div className="glass-card modern-card rounded-xl p-4 sm:p-6 relative">
      {/* Step Number */}
      <div 
        className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 gradient-purple-magenta rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg animate-float"
      >
        {stepNumber}
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'var(--light-purple)' }}
        >
          <div style={{ color: 'var(--primary-purple)' }}>
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 
        className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center"
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
            <span className="text-gray-600 text-xs sm:text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepCard;
