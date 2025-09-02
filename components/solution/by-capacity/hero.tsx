'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
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
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto flex flex-col gap-16 lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6"
      >
    
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 lg:max-w-3xl">
            Comprehensive QA Services to Help You Ship With Confidence
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/solutions/qa-img-1.png"
                alt="A team collaborating in a workshop setting with a whiteboard"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Qualiview Lab, we offer comprehensive software testing services powered by a unique blend of AI automation and expert human validation. From functionality to performance, security, and AI assurance — our hybrid approach ensures your product ships faster and with confidence.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>        
            <div className="relative h-full w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/images/solutions/qa-img-2.png"
                alt="A development team focused on their laptops at a desk"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}