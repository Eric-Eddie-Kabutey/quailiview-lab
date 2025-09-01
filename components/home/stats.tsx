'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// Define the bands for the background. This makes it easy to adjust.
// The widths are percentages, and the colors are taken from your design.
const bands = [
  { width: 'w-[12%]', color: 'bg-[#e4a96a]' },
  { width: 'w-[10%]', color: 'bg-[#df974d]' },
  { width: 'w-[8%]', color: 'bg-[#d98531]' },
  { width: 'w-[40%]', color: 'bg-[#c0683a]' }, // Center band
  { width: 'w-[8%]', color: 'bg-[#d98531]' },
  { width: 'w-[10%]', color: 'bg-[#df974d]' },
  { width: 'w-[12%]', color: 'bg-[#e4a96a]' },
];

export default function Stats() {
  const ref = useRef(null);
  // Trigger the animation when the section is 100px from the bottom of the viewport
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  const targetNumber = 4587144;
  
  // As requested, start the count from a higher value for a better UX.
  // This makes the animation feel quick and satisfying for large numbers.
  const startNumber = targetNumber * 0.98;

  // Create a spring animation that will go from startNumber to targetNumber
  const count = useSpring(startNumber, {
    mass: 0.8,
    stiffness: 75,
    damping: 25,
  });

  // useTransform formats the number with commas and adds the "+" sign
  const displayNumber = useTransform(count, (latest) => {
    return new Intl.NumberFormat('en-US').format(Math.round(latest)) + '+';
  });

  // When the component is in view, set the spring's target value
  useEffect(() => {
    if (isInView) {
      count.set(targetNumber);
    }
  }, [isInView, count, targetNumber]);

  return (
    <section ref={ref} className="relative w-full py-24 sm:py-32 overflow-hidden">
      {/* Background with colored bands */}
      <div className="absolute inset-0 flex w-full h-full">
        {bands.map((band, index) => (
          <div key={index} className={`${band.width} ${band.color} h-full`} />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
          aria-label={`${targetNumber.toLocaleString()}+ tests written`}
        >
          {displayNumber}
        </motion.h1>
        <p className="mt-4 text-xl sm:text-2xl text-white/90">
          Unit test written by Qualiview Lab community
        </p>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Qualiview Lab can generate complete, reliable, and fully maintainable unit tests using a powerful combination of AI-driven automation and expert human validation.
        </p>
      </div>
    </section>
  );
}