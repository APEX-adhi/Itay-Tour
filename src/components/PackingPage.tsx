import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRIP_DATA } from '../constants';
import { Check, Sparkles } from 'lucide-react';

const PackingPage: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1920" 
          alt="Snowy Street"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display text-deep-navy mb-4"
          >
            Winter Essentials
          </motion.h2>
          <p className="text-glacier-blue font-serif italic text-xl">Be prepared for the Italian frost</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TRIP_DATA.packingList.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, x: catIdx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-display text-deep-navy mb-6 border-b border-glacier-blue/20 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    onClick={() => toggleItem(item)}
                    className="flex items-center justify-between cursor-pointer group"
                  >
                    <span className={`text-lg transition-all duration-300 ${checkedItems.has(item) ? 'text-glacier-blue line-through opacity-50' : 'text-deep-navy/80'}`}>
                      {item}
                    </span>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${checkedItems.has(item) ? 'bg-glacier-blue border-glacier-blue' : 'border-glacier-blue/30 group-hover:border-glacier-blue'}`}>
                      <AnimatePresence>
                        {checkedItems.has(item) && (
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-4 h-4 text-white" />
                            <motion.div 
                              className="absolute"
                              initial={{ opacity: 1, scale: 0 }}
                              animate={{ opacity: 0, scale: 2 }}
                            >
                              <Sparkles className="w-8 h-8 text-glacier-blue" />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackingPage;
