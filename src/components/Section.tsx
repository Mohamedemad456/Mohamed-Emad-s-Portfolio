import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section = ({
  children,
  id,
  className = '',
  title,
  subtitle,
}: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 flex flex-col items-center justify-center"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight text-purple-dark">
                {title}
              </h2>
            )}
            {title && (
              <div className="h-1 w-24 rounded-full bg-gradient-green-purple opacity-60 mb-4" />
            )}
            {subtitle && (
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
