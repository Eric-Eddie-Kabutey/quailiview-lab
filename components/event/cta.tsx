'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import NewsletterSubscribe from './news-letter-subcribe';


export default function CTA() {
  return (
    <section className="md:relative bg-[#CA6E1D] text-white py-24 sm:py-24 overflow-hidden">
      {/* Background with subtle vertical lines (optional, but matches other sections) */}
      <div className="absolute inset-0 flex justify-around opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-gray-500" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <div className="mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        <div className="relative z-10 flex flex-col items-start justify-between">
          {/* Left Column: Text Content and Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 flex flex-col gap-6"
          >
            <h2 className="text-4xl sm:text-4xl max-w-[476px] font-semibold tracking-tight leading-13 text-white">
              Be the first to know about upcoming events.
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-[376px]">
              Sign up for our newsletter to get invites, early-bird discounts, and event updates.
            </p>
            <div className="mt-4">
              <NewsletterSubscribe />
            </div>
          </motion.div>
          
          {/* Mobile Right Column: Globe Image */}
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="hidden w-full"
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
          {/* Desktop Right Column: Globe Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="hidden md:block absolute top-0 -right-10 xl-right-0 bottom-0 w-full h-80 sm:h-96 lg:h-full overflow-hidden"
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
    </section>
  );
}