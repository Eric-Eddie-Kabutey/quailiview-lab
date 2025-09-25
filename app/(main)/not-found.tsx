'use client'; // Required for Framer Motion animations

import { motion, Variants } from '@/components/module/framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Using your Shadcn button
import BackgroundEffect from '@/components/shared/background-effect';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-white text-center">
      {/* Consistent dotted background from your other pages */}    
        <BackgroundEffect lineColor='gray-200' />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible" 
        className="relative z-10 max-w-xl px-4 sm:px-6"
      >
        <motion.div variants={itemVariants}>
          <AlertTriangle className="mx-auto h-16 w-16 text-[#03444A]" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          404 - Page Not Found
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg leading-8 text-gray-600"
        >
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or you may have typed the address incorrectly.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <Button asChild className="bg-[#03444A] hover:bg-[#03444A] text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}