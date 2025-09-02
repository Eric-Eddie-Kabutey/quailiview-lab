'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import { Lightbulb, BrainCircuit, Rocket } from 'lucide-react';

// Data for the benefits section, making it easy to edit
const benefitsData = [
  {
    icon: Lightbulb,
    title: "We're Hybrid by Design",
    description: 'AI and humans working together — and the same goes for our team. We believe in flexible, remote-first collaboration across borders and time zones.',
  },
  {
    icon: BrainCircuit,
    title: "You'll Work on Real Problems",
    description: 'From AI/ML models to fintech platforms, our projects are diverse, impactful, and meaningful. You won’t be stuck testing the same login form 20 times.',
  },
  {
    icon: Rocket,
    title: 'We Move Fast, But Test Smarter',
    description: 'We’re not just another outsourcing agency. We value speed, but never at the cost of quality. You’ll help improve real-world software — and how it’s tested.',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function WhyWorkWithUs() {
  return (
    <section className="relative bg-[#CA6E1D] text-white py-24 sm:py-32">
      {/* Dotted background with a lighter color for visibility */}
      <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-white" />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants} className="lg:sticky lg:top-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Why Work With Us
            </h2>
          </motion.div>

          {/* Right Column: Benefits List */}
          <motion.div variants={containerVariants} className="flex flex-col gap-12">
            {benefitsData.map((benefit) => (
              <motion.div key={benefit.title} variants={itemVariants} className="flex gap-4">
                <div className="mt-1">
                  <benefit.icon className="w-6 h-6 text-white/80 flex-shrink-0" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{benefit.title}</h3>
                  <p className="mt-2 text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </motion.div>
    </section>
  );
}