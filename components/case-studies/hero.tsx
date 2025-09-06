'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import BackgroundEffect from '../shared/background-effect';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function CaseStudiesHero() {
  return (
    <section className="relative bg-white pt-19 pb-15 sm:pt-32 md:pb-22">
      {/* Consistent dotted background */}      
      <BackgroundEffect lineColor='gray-200' />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0"
          >
              <div className="flex flex-col gap-6 md:gap-10">
              <p className="text-center tracking-wider text-[#03444A]">CASE STUDIES</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18 items-start">
          
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-11 md:leading-15 text-gray-900">
              See how Qualiview Lab helps businesses achieve flawless software, faster.
            </h1>
          </motion.div>

          {/* Right Column: Text */}
          <motion.div variants={itemVariants}>            
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              From e-commerce to healthcare, our hybrid AI + human testing approach delivers measurable improvements in speed, quality, and user satisfaction. Explore real client success stories and discover what we can achieve for your business.
            </p>
          </motion.div>

        </div>
                  
              </div>
      </motion.div>
    </section>
  );
}