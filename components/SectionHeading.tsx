interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-12`}>
      <h2 
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
        style={{ 
          fontFamily: 'Playfair Display, serif',
          color: 'var(--dark-charcoal)'
        }}
      >
        {title}
        <span 
          className="absolute bottom-0 left-0 w-full h-1 rounded-full"
          style={{ 
            backgroundColor: 'var(--primary-violet)',
            marginTop: '8px'
          }}
        />
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
