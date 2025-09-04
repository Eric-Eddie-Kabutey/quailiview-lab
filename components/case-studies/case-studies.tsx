'use client';

import { motion } from '@/components/module/framer-motion';
import PostCard from '@/components/shared/post-card'; 
import { caseStudies } from '@/data/mock-post/case-studies'; // Import our new case study data

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function CaseStudiesSection() {
  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((caseStudy) => (
            <PostCard key={caseStudy.slug} post={caseStudy} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}