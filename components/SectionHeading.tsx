'use client';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
