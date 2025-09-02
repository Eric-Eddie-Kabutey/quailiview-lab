'use client';

import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutHero() {
  return (
    <section className="relative bg-white">
      {/* Dotted background lines for consistency */}
      <div className="absolute inset-0 flex justify-around opacity-75">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      {/* Main container with padding and full-screen behavior on xl devices */}
      <div className="relative mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 xl:flex xl:flex-col xl:min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 sm:py-32 xl:flex-1 xl:flex xl:flex-col xl:justify-center"
        >
          {/* Top Section: Text Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
                We’re redefining{' '}
                <span className="text-slate-500">how software gets</span>{' '}
                tested.
              </h1>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-6 lg:mt-0 lg:pt-4">
              <p className="text-lg text-gray-600">
                Blending the speed of AI automation with the precision of expert human testers. At Qualiview Lab, we believe smarter testing leads to better products, faster releases, and happier users.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section: Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-full mx-auto aspect-[16/9] lg:aspect-[2/1] xl:flex-1 xl:max-h-[600px] -mx-4 sm:-mx-6 lg:mx-0"
        >
          <Image
            src="/assets/images/team-image.png"
            alt="The Qualiview Lab team collaborating around a laptop"
            fill
            className="object-cover lg:rounded-lg"            
            priority 
          />
        </motion.div>
      </div>
    </section>
  );
}