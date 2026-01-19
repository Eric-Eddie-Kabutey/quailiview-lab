'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';

// Define the steps in an array for easy management
const processSteps = [
  {
    icon: "/assets/icons/works1.png",
    title: 'AI-Powered Baseline Testing',
    description: 'Our AI engine runs deep automated tests to instantly scan your application for functional issues, regressions, and common bugs.',
  },
  {
    icon: "/assets/icons/works2.png",
    title: 'Human-Led Quality Validation',
    description: 'Our experienced QA engineers manually verify the software’s behavior, focusing on usability, edge cases, and complex workflows that AI alone can’t interpret.',
  },
  {
    icon: "/assets/icons/works3.png",
    title: 'Actionable Reporting & Insights',
    description: 'We compile results from both AI and human analysis into clear, prioritized reports with fix recommendations.',
  },
];

// Animation variants for staggering children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HowItWorks() {
  return (
    <section id='how-it-works' className="relative -mt-2 sm:mt-0 bg-[#03444A] text-white pt-8 pb-8 sm:py-32 overflow-hidden">
      {/* Re-using the dotted background, now with a darker color */}
      <div className="absolute inset-0 flex justify-around opacity-30">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-gray-500" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <div className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-medium text-gray-400">HOW IT WORKS</p>
          <h2 className="mt-2 md:mt-6  text-4xl font-bold tracking-tight leading-13 text-white sm:text-5xl">
            How Qualiview Lab Delivers Smarter Software Testing
          </h2>
          <p className="mt-3 md:mt-8 text-lg leading-8 text-gray-300">
            We combine the speed and scale of AI automation with the precision of human testers to ensure your software is tested faster, more thoroughly, and with real-world accuracy from initial scans to final validation.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16"
        >
          {processSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-brand-accent">                      
                      <Image src={step.icon} alt='steps' width={100} height={100} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}