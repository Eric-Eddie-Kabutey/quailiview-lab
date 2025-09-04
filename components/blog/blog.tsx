'use client';

import { motion } from '@/components/module/framer-motion';
import PostCard from '@/components/shared/post-card';
import { mockPosts } from '@/data/mock-posts'; 

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function BlogSection() {
  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        {/* You can add a header here if needed, e.g., "From the Blog" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mockPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}