'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Link from 'next/link';

// Animation variants for a staggered entrance
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

export default function JoinUsHero() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      {/* Consistent dotted background */}
      <div className="absolute inset-0 flex justify-around opacity-75 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gray-900">
              Join the Team Shaping the Future of Software Testing
            </h1>
          </motion.div>

          {/* Right Column: Text & Button */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <p className="text-lg text-gray-600">
              Ready to test real products, work with innovative teams, and grow your QA career?
            </p>
            <p className="text-lg text-gray-600">
              Join our global network of testers and get access to paid opportunities across web, mobile, and AI-driven platforms.
            </p>
            <div className="mt-4">
              <Link
                href="#"
                className="inline-block px-8 py-3 font-semibold text-white bg-[#03444A] rounded-lg shadow-sm hover:bg-[#03444A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#03444A] focus:ring-offset-2"
              >
                Become a Tester
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}