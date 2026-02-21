import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface SectionProps {
  title: string;
  subtitle: string;
  image: string;
  items: string[];
  reverse?: boolean;
  theme?: 'ice' | 'water' | 'marble';
}

const CitySection: React.FC<SectionProps> = ({ title, subtitle, image, items, reverse, theme = 'ice' }) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Theme Elements */}
      {theme === 'water' && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-radial from-glacier-blue/30 to-transparent"
          />
        </div>
      )}

      <div className={`container mx-auto flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
        {/* Image Side */}
        <motion.div 
          style={{ y: yImage }}
          className="w-full lg:w-3/5 relative h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent" />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          style={{ y: yText, opacity }}
          className="w-full lg:w-2/5 z-10"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h2 className="text-5xl md:text-7xl font-display text-deep-navy mb-4">{title}</h2>
            <p className="text-xl font-serif text-glacier-blue italic mb-8">{subtitle}</p>
            
            <ul className="space-y-6">
              {items.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <span className="w-8 h-[1px] bg-glacier-blue group-hover:w-12 transition-all duration-500" />
                  <span className="text-lg text-deep-navy/80 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CitySection;
