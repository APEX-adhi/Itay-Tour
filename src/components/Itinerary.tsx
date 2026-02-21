import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TRIP_DATA } from '../constants';
import { Clock, MapPin, Utensils, Hotel } from 'lucide-react';

const Itinerary: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section className="relative min-h-screen bg-mist-white py-24">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display text-deep-navy mb-4"
        >
          The Journey
        </motion.h2>
        <p className="text-glacier-blue font-serif italic text-xl">A day-by-day winter exploration</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x no-scrollbar cursor-grab active:cursor-grabbing pb-12"
      >
        {TRIP_DATA.itinerary.map((day, idx) => (
          <div 
            key={idx}
            className="min-w-full md:min-w-[80vw] lg:min-w-[70vw] h-[80vh] snap-center px-4"
          >
            <div className="frost-glass h-full rounded-3xl overflow-hidden flex flex-col lg:flex-row">
              {/* Left: Image */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
                <img 
                  src={day.image} 
                  alt={day.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8">
                  <span className="text-8xl font-display text-white/20">0{day.day}</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-4xl font-display text-white mb-2">{day.title}</h3>
                </div>
              </div>

              {/* Right: Details */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 overflow-y-auto">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-glacier-blue shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-deep-navy/40 mb-1">Morning</p>
                      <p className="text-lg text-deep-navy/80">{day.morning}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-glacier-blue shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-deep-navy/40 mb-1">Afternoon</p>
                      <p className="text-lg text-deep-navy/80">{day.afternoon}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Utensils className="w-6 h-6 text-glacier-blue shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-deep-navy/40 mb-1">Evening & Meals</p>
                      <p className="text-lg text-deep-navy/80">{day.evening}</p>
                      <p className="text-sm italic text-glacier-blue mt-1">{day.meals}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Hotel className="w-6 h-6 text-glacier-blue shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-deep-navy/40 mb-1">Stay</p>
                      <p className="text-lg text-deep-navy/80">{day.hotel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="container mx-auto px-4 mt-8 flex justify-center">
        <div className="w-64 h-1 bg-frost-silver/30 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollXProgress }}
            className="h-full bg-glacier-blue origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
