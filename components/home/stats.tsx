'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import BackgroundEffect from '../shared/background-effect';

export default function Stats() {
  const ref = useRef(null);
  // Reduced margin to trigger faster and ensure no extra space
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const targetNumber = 4587144;
  const startNumber = targetNumber * 0.98;

  const count = useSpring(startNumber, {
    mass: 0.8,
    stiffness: 75,
    damping: 25,
  });

  const displayNumber = useTransform(count, (latest) => {
    return new Intl.NumberFormat('en-US').format(Math.round(latest)) + '+';
  });

  useEffect(() => {
    if (isInView) {
      count.set(targetNumber);
    }
  }, [isInView, count, targetNumber]);

  return (
    // Set pt-0 and removed all top margins/paddings
    <section 
      ref={ref} 
      className="relative w-full mt-12 sm:mt-32 pt-16 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-[#c0683a]"
    >
      {/* BackgroundEffect is absolute, so it won't take up space */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundEffect lineColor='white/10' />
      </div>

      {/* Content Overlay - Adjusted spacing between elements */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-0">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-none"
          aria-label={`${targetNumber.toLocaleString()}+ tests written`}
        >
          {displayNumber}
        </motion.h1>
        <p className="mt-8 text-xl sm:text-3xl font-medium text-white/95">
          Unit test written by Qualiview Lab community
        </p>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
          Qualiview Lab can generate complete, reliable, and fully maintainable unit tests using a powerful combination of AI-driven automation and expert human validation.
        </p>
      </div>
    </section>
  );
}