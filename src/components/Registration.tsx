import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';

const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    passport: 'yes',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-mist-white relative overflow-hidden">
      {/* Subtle Snow Burst Effect on Submit */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: (Math.random() - 0.5) * 1000,
                  y: (Math.random() - 0.5) * 1000,
                  rotate: Math.random() * 360
                }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-4 h-4 bg-white rounded-full blur-sm"
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="frost-glass p-8 md:p-12 rounded-[2.5rem] relative z-10"
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-display text-deep-navy mb-2">Secure Your Spot</h2>
                <p className="text-glacier-blue font-serif italic">The journey of a lifetime awaits</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-navy/60 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/50 border border-glacier-blue/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-glacier-blue/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-navy/60 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/50 border border-glacier-blue/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-glacier-blue/30 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-navy/60 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-white/50 border border-glacier-blue/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-glacier-blue/30 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-deep-navy/60 ml-1">Grade / Class</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/50 border border-glacier-blue/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-glacier-blue/30 transition-all"
                      placeholder="Grade 11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-deep-navy/60 ml-1">Passport Availability</label>
                  <select className="w-full bg-white/50 border border-glacier-blue/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-glacier-blue/30 transition-all appearance-none">
                    <option value="yes">I have a valid passport</option>
                    <option value="applied">Applied / In Progress</option>
                    <option value="no">Need to apply</option>
                  </select>
                </div>

                <div className="flex items-center space-x-3 pt-4">
                  <input type="checkbox" required className="w-5 h-5 rounded border-glacier-blue/20 text-glacier-blue focus:ring-glacier-blue/30" />
                  <label className="text-sm text-deep-navy/70">I have parental consent for this expedition</label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-deep-navy text-white font-medium py-4 rounded-xl shadow-xl shadow-deep-navy/20 flex items-center justify-center space-x-2 group overflow-hidden relative"
                >
                  <span className="relative z-10">Submit Registration</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <motion.div 
                    className="absolute inset-0 bg-glacier-blue"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-glacier-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-glacier-blue" />
              </div>
              <h2 className="text-4xl font-display text-deep-navy mb-4">Grazie.</h2>
              <p className="text-xl font-serif text-glacier-blue italic">Your journey begins.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm uppercase tracking-widest text-deep-navy/40 hover:text-glacier-blue transition-colors"
              >
                Register another student
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
