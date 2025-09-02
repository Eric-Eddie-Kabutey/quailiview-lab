'use client';

import { motion, Variants } from '@/components/module/framer-motion';

const statements = [
  {
    title: 'Our Mission',
    description: 'To modernize quality assurance by embedding AI into our testing process, delivering faster feedback and stronger software.',
  },
  {
    title: 'Our Vision',
    description: 'To be the trusted testing lab for tomorrow’s technologies, combining automation with human excellence.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function MissionVision() {
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
        {/* Top horizontal divider */}
        <div className="border-t border-gray-200" />

        {/* Content Area */}
        <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
          {statements.map((statement) => (
            <motion.div
              key={statement.title}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
              {/* Left Column: Title */}
              <div className="md:col-span-1">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                  {statement.title}
                </h2>
              </div>
              {/* Right Column: Description */}
              <div className="md:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {statement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom horizontal divider */}
        <div className="border-t border-gray-200" />
      </motion.div>
    </section>
  );
}