import React from 'react';
import { motion } from 'motion/react';
import { TRIP_DATA } from '../constants';
import * as Icons from 'lucide-react';

const CostBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-ice-blue/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display text-deep-navy mb-4"
          >
            Investment
          </motion.h2>
          <p className="text-glacier-blue font-serif italic text-xl">Transparent breakdown of your expedition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRIP_DATA.costs.map((item, idx) => {
            const IconComponent = (Icons as any)[item.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center group transition-all duration-500 hover:shadow-glacier-blue/20"
              >
                <div className="w-12 h-12 rounded-full bg-glacier-blue/10 flex items-center justify-center mb-4 group-hover:bg-glacier-blue/20 transition-colors">
                  {IconComponent && <IconComponent className="w-6 h-6 text-glacier-blue" />}
                </div>
                <h3 className="text-sm uppercase tracking-widest text-deep-navy/60 mb-2">{item.category}</h3>
                <p className="text-2xl font-display text-deep-navy">{item.amount}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <p className="text-sm uppercase tracking-[0.3em] text-glacier-blue mb-2">Total Expedition Cost</p>
            <h3 className="text-7xl md:text-9xl font-display text-deep-navy tracking-tighter">
              ₹ 1,15,000
            </h3>
            <p className="text-lg font-serif italic text-deep-navy/60 mt-4">All Inclusive • No Hidden Charges</p>
            
            <motion.div 
              className="absolute -inset-8 border border-glacier-blue/20 rounded-[4rem] -z-10"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostBreakdown;
