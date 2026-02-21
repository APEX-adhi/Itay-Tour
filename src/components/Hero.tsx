import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Layers */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&q=80&w=1920" 
          alt="Italian Mountains"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ice-blue/40 via-transparent to-mist-white" />
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-20 max-w-4xl"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-display text-deep-navy mb-6 tracking-tight italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Ciao Italia 26
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl font-serif text-deep-navy/80 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          A 5 Day Educational Expedition
        </motion.p>
        
        <motion.div 
          className="flex items-center justify-center space-x-4 text-lg font-medium tracking-widest uppercase text-deep-navy/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Rome</span>
          <span className="w-1 h-1 bg-glacier-blue rounded-full" />
          <span>Venice</span>
          <span className="w-1 h-1 bg-glacier-blue rounded-full" />
          <span>Milan</span>
        </motion.div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div 
        className="absolute bottom-10 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-glacier-blue opacity-60" />
      </motion.div>
    </section>
  );
};

export default Hero;
