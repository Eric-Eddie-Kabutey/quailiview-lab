'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


export default function CTA() {
  return (
    <section className="relative bg-[#03444A] text-white py-24 sm:py-24 overflow-hidden">
      {/* Background with subtle vertical lines (optional, but matches other sections) */}
      <div className="absolute inset-0 flex justify-around opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <div className="mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content and Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Ready to Ship Bug-Free Software, Faster?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              AI does the heavy lifting. Experts make it bulletproof.
            </p>
            <div className="mt-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold text-black bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cta-bg-dark-teal">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Globe Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="absolute top-0 right-0 bottom-0 w-full h-80 sm:h-96 lg:h-full overflow-hidden"
          >
            <Image
              src="/assets/images/earth-europe.png"
              alt="Global network illustration"
              fill
              className="object-contain object-right" 
              priority={false} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}