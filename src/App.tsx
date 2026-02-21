/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Hero from './components/Hero';
import CitySection from './components/CitySection';
import Itinerary from './components/Itinerary';
import CostBreakdown from './components/CostBreakdown';
import PackingPage from './components/PackingPage';
import Registration from './components/Registration';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-glacier-blue/30">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-glacier-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Rome Section */}
      <CitySection 
        title="Eternal Rome"
        subtitle="Where history meets the winter sky"
        image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1920"
        items={[
          "Colosseum: Emerging from the winter fog",
          "Roman Forum: Echoes of an ancient empire",
          "Trevi Fountain: A crystal wish in the cold",
          "Vatican City: Sacred art under soft light"
        ]}
        theme="ice"
      />

      {/* Venice Section */}
      <CitySection 
        title="Serene Venice"
        subtitle="A floating dream in the mist"
        image="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=1920"
        items={[
          "Grand Canal: Ripples of winter reflection",
          "St. Mark’s Square: Pigeons in the snow",
          "Gondola Ride: A silent drift through history",
          "Venetian Sunset: A soft pink winter gradient"
        ]}
        reverse
        theme="water"
      />

      {/* Milan Section */}
      <CitySection 
        title="Modern Milan"
        subtitle="Marble, fashion, and Olympic fire"
        image="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=1920"
        items={[
          "Duomo di Milano: A slow upward reveal",
          "Galleria: Luxury under glass and iron",
          "Winter Olympics 2026: The world gathers",
          "Fashion District: Winter style redefined"
        ]}
        theme="marble"
      />

      {/* Itinerary Section */}
      <Itinerary />

      {/* Cost Breakdown */}
      <CostBreakdown />

      {/* Packing Page */}
      <PackingPage />

      {/* Registration Page */}
      <Registration />

      {/* Final Scene */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-t from-ice-blue to-mist-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1920" 
            alt="Italian Sunset"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative z-10"
        >
          <p className="text-xl font-serif italic text-glacier-blue mb-4">February 2026</p>
          <h2 className="text-5xl md:text-7xl font-display text-deep-navy mb-8 tracking-widest uppercase">
            Rome. Venice. Milan.
          </h2>
          <motion.p 
            className="text-3xl md:text-5xl font-display text-deep-navy/60 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            “See You in Italy.”
          </motion.p>
        </motion.div>

        {/* Footer */}
        <footer className="absolute bottom-10 text-xs uppercase tracking-[0.5em] text-deep-navy/30">
          © 2026 Vrikshaa International School Grade 9 & 11 Travel Readiness
        </footer>
      </section>
    </div>
  );
}
