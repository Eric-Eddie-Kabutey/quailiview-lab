'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    // Section takes up at least the full viewport height and centers content vertically
    <section className="relative min-h-screen pt-6 flex items-center bg-white">
      {/* Faint vertical grid lines for background effect */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-gray-200"></div>
        ))}
      </div>

      {/* Main content container */}
      <div className="relative mx-auto w-full lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 font-semibold px-3 py-1.5 rounded-full text-sm self-start">
                {/* <Bot className="w-5 h-5" /> */}
                              Tested by AI. Perfected by Humans.
                              <Image src="/assets/icons/bot.png" alt='Bot image' width={100} height={100} className='w-5 h-5' />
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter leading-13 text-gray-900">
                Smart, Fast, Reliable Software Testing
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Qualiview Lab bridges the speed of AI-driven automation with the
                precision of expert human testing — delivering faster, more
                reliable, and deeply accurate QA results for modern software teams.
              </p>
            </div>
            <div className="mt-2">
              <button className="inline-flex items-center justify-center gap-4 px-6 py-3 font-semibold text-white bg-[#0f4c5c] rounded-lg shadow-sm hover:bg-[#0c3b47] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#0f4c5c] focus:ring-offset-2">
                Get Started                
                <Image src="/assets/icons/arrow-next-page.png" alt='Arrow right image' width={60} height={24} className='w-auto h-2.5 md:h-3' />
              </button>
            </div>

            {/* Bottom Features Section */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-8">
              <div className="flex flex-col items-start gap-3">
                <div className="p-2 border border-gray-200 rounded-full bg-gray-50">
                  <CheckCircle2 className="w-6 h-6 text-[#0f4c5c]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Hybrid Power</h3>
                <p className="text-gray-600">
                  Get the best of AI speed and human judgment in one seamless workflow.
                </p>
              </div>
              
              {/* Added a vertical dashed line for larger screens */}
              <div className="relative flex flex-col items-start gap-3 sm:pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-repeat-y bg-[length:100%_8px] bg-[image:linear-gradient(to_bottom,_#e5e7eb_4px,_transparent_4px)] hidden sm:block"></div>
                <div className="p-2 border border-gray-200 rounded-full bg-gray-50">
                  <Clock className="w-6 h-6 text-[#0f4c5c]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Test Smarter</h3>
                <p className="text-gray-600">
                  Deliver flawless software faster with AI-accelerated quality assurance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block bg-[#03444A] p-4 rounded-2xl shadow-2xl"
          >
            <Image
              src="/assets/images/code-snippet.png"
              alt="Code snippet showing software testing"
                          width={600}
                          height={400}
              quality={95}
              priority
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}