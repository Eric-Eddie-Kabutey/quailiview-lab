"use client"
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from '@/components/module/framer-motion';

const heroImages = [
  '/assets/images/solutions/tech/img1.png',
  '/assets/images/solutions/tech/img2.png',
  '/assets/images/solutions/tech/img3.png',
  '/assets/images/solutions/tech/img4.png',
  '/assets/images/solutions/tech/img5.png',
  '/assets/images/solutions/tech/img6.png',
  '/assets/images/solutions/tech/img7.png',
];

function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans pt-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `repeating-linear-gradient(90deg, #E2E8F0, #E2E8F0 1px, transparent 1px, transparent 120px)`,
           }}>
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `repeating-linear-gradient(0deg, #E2E8F0, #E2E8F0 1px, transparent 1px, transparent 40px)`,
               opacity: 0.1
             }}>
        </div>
      </div>

      <div className="relative z-10 w-full pt-12 pb-0 text-center">
        {/* Main Heading */}
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-[#282930] leading-tight tracking-tight"
          >
            From mobile apps to streaming platforms, we tailor our testing approach to the technology that powers your product.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-[#8E92A2] leading-relaxed font-normal"
          >
            Different technologies require different testing strategies. At Qualiview Lab, 
            we adapt our hybrid AI + human testing model to match the unique demands 
            of your platform — ensuring performance, reliability, and user satisfaction 
            across every device and environment.
          </motion.p>
        </div>

        {/* Action Button - Normal button look on mobile */}
        <div className="mt-8 md:mt-12 mb-16 md:mb-20 px-6">
          <button className="inline-flex items-center justify-center gap-2 bg-[#03444A] text-white px-8 py-4 rounded-sm text-base font-bold transition-all hover:bg-[#023338] shadow-lg active:scale-95 border border-white/10 uppercase tracking-widest w-auto mx-auto min-w-[240px] md:min-w-0">
            Talk to a Testing Specialist
            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

{/* Wall-to-Wall Image Grid with Staircase 'Cut' Effect - Responsive Optimization */}
<div className="w-full md:px-0 flex items-end overflow-x-auto md:overflow-hidden no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory">
  <div className="flex md:grid md:grid-cols-4 lg:grid-cols-7 gap-2 w-max md:w-full items-end px-6 md:px-0 pb-4 md:pb-0">
    {heroImages.map((src, idx) => {
      // Staircase for desktop, uniform height for mobile
      const dH = [350, 300, 260, 220, 260, 300, 350][idx];
      const mH = 240; // Uniform height on mobile

      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * idx }}
          style={{ 
            '--h-mobile': `${mH}px`, 
            '--h-desktop': `${dH}px` 
          } as React.CSSProperties}
          className="relative overflow-hidden rounded-md group shadow-sm hover:shadow-xl transition-all duration-500 w-[280px] md:w-auto h-[var(--h-mobile)] md:h-[var(--h-desktop)] flex-shrink-0 snap-center"
        >
          <img
            src={src}
            alt={`Testing scope ${idx + 1}`}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  );
}

export { HeroSection };