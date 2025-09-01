'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  cardBg: string;
  indicatorBg: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "We used to spend days writing and maintaining unit tests. With Qualiview Lab, we got high-quality, AI-generated tests reviewed by real QA pros — and reduced our test writing time by over 70%.",
    name: 'Maya Rodriguez',
    title: 'Engineering Lead at CodeZen',
    avatar: "/assets/icons/maya-rodriguez.png",
    cardBg: 'bg-[#eef3f3]',
    indicatorBg: 'bg-[#e0e8e8]',
  },
  {
    quote: "Their hybrid model caught UX issues that our automation suite completely missed. The human testers were incredibly thorough — it felt like they were part of our in-house team.",
    name: 'Rishi Verma',
    title: 'Product Manager at Nexara',
    avatar: "/assets/icons/rishi-verma.png",
    cardBg: 'bg-[#fcf8f1]',
    indicatorBg: 'bg-[#faeedb]',
  },
  {
    quote: "The speed of their AI automation plus expert manual validation helped us confidently release a new update ahead of schedule. The insights in the reports were super actionable.",
    name: 'Andre Lewis',
    title: 'QA Director at TeraPulse',
    avatar: "/assets/icons/andre-lewis.png",
    cardBg: 'bg-[#da8a5d]',
    indicatorBg: 'bg-[#c0683a]',
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: 'y' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCurrent();
    emblaApi.on('select', updateCurrent);
    emblaApi.on('reInit', updateCurrent);
  }, [emblaApi, updateCurrent]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const activeTestimonial = testimonials[selectedIndex];

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-75">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <div className="relative mx-auto lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-semibold text-brand-teal">WE LOVE DEVELOPERS</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            They talk about it better than us
          </h2>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl">
            
            {/* 1. Invisible Embla Carousel for functionality */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex flex-col h-auto">
                {testimonials.map((_, index) => (
                  <div className="grow-0 shrink-0 basis-full min-h-0" key={index}>
                    {/* This provides a stable height for the container */}
                    <div className="h-[360px] md:h-[320px]"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Peeking Color Indicators (z-10, behind the main card) */}
            <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10">
              <div className="flex flex-col gap-2">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`w-8 h-12 rounded-lg ${testimonial.indicatorBg}`}
                    animate={{ 
                      scale: selectedIndex === index ? 1 : 0.85,
                      opacity: selectedIndex === index ? 1 : 0.5,
                     }}
                    transition={{ duration: 0.3, ease: 'circOut' }}
                  />
                ))}
              </div>
            </div>

            {/* 3. The Active, Visible Testimonial Card (z-20, on top) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative h-full p-8 md:p-12 rounded-2xl shadow-lg flex flex-col justify-between ${activeTestimonial.cardBg}`}
                >
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-900/80 leading-snug">
                    “ {activeTestimonial.quote} ”
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <figcaption className="flex items-center gap-4">
                      <Image
                        src={activeTestimonial.avatar}
                        alt={`Photo of ${activeTestimonial.name}`}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-xl object-cover shadow-md"                    
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{activeTestimonial.name}</p>
                        <p className="text-gray-700/90">{activeTestimonial.title}</p>
                      </div>
                    </figcaption>
                    
                    {/* 4. Controls (pointer-events enabled) */}
                    <div className="flex flex-col gap-2 pointer-events-auto">
                      <button onClick={scrollPrev} aria-label="Previous testimonial" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-gray-600 hover:bg-black/10 transition">
                        <ArrowUp size={20} />
                      </button>
                      <button onClick={scrollNext} aria-label="Next testimonial" className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark text-white hover:bg-brand-teal-dark transition">
                        <ArrowDown size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}