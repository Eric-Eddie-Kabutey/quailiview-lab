'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';


// Define a type for our testimonial data
type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  cardBg: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "We used to spend days writing and maintaining unit tests. With Qualiview Lab, we got high-quality, AI-generated tests reviewed by real QA pros — and reduced our test writing time by over 70%.",
    name: 'Maya Rodriguez',
    title: 'Engineering Lead at CodeZen',
    avatar: "/assets/images/avatars/maya-rodriguez.png",
    cardBg: 'bg-[#E6F1F1]',
  },
  {
    quote: "Their hybrid model caught UX issues that our automation suite completely missed. The human testers were incredibly thorough — it felt like they were part of our in-house team.",
    name: 'Rishi Verma',
    title: 'Product Manager at Nexara',
    avatar: '/assets/images/avatars/rishi-verma.png',
    cardBg: 'bg-[#F4E9CD]',
  },
  {
    quote: "The speed of their AI automation plus expert manual validation helped us confidently release a new update ahead of schedule. The insights in the reports were super actionable.",
    name: 'Andre Lewis',
    title: 'QA Director at TeraPulse',
    avatar: '/assets/images/avatars/andre-lewis.png',
    cardBg: 'bg-[#CA6F1E]',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: true });
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

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-75">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>

      <div className="relative mx-auto lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-medium text-[##8E92A2]">WE LOVE DEVELOPERS</p>
          <h2 className="mt-4 md:mt-6 text-4xl font-semibold tracking-tight leading-13 text-gray-900 sm:text-5xl">
            They talk about it better than us
          </h2>
        </div>

        <div className="mt-20 relative h-[400px] md:h-[350px] max-w-3xl mx-auto">
          {/* 1. Invisible Embla Carousel for functionality ONLY */}
          <div className="absolute inset-0 opacity-0 pointer-events-none" ref={emblaRef}>
            <div className="flex flex-col h-full">
              {testimonials.map((_, index) => (
                <div key={index} className="grow-0 shrink-0 basis-full" />
              ))}
            </div>
          </div>

          {/* 2. The VISIBLE Stack of Testimonials */}
          <div className="absolute inset-0">
            {testimonials.map((testimonial, index) => {
              const position = index - selectedIndex;
              const isActive = position === 0;

              return (
                <motion.div
                  key={index}
                  className={`absolute w-full h-full p-8 md:p-12 rounded-2xl shadow-xl flex flex-col justify-between ${testimonial.cardBg}`}
                  initial={false}
                  animate={{
                    // Stacking logic
                    y: isActive ? 0 : position * 20,
                    scale: isActive ? 1 : 1 - Math.abs(position) * 0.05,
                    zIndex: testimonials.length - Math.abs(position),
                    opacity: isActive ? 1 : 1 - Math.abs(position) * 0.4,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                  <blockquote className="text-xl md:text-2xl font-medium text-gray-900/80 leading-snug">
                    “ {testimonial.quote} ”
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <figcaption className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo of ${testimonial.name}`}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-xl object-cover shadow-md"
                        // placeholder="blur"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-700/90">{testimonial.title}</p>
                      </div>
                    </figcaption>
                    
                    {/* Controls are only visible and clickable on the active card */}
                    {isActive && (
                      <div className="flex flex-col gap-2">
                        <button onClick={scrollPrev} aria-label="Previous testimonial" className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-gray-600 hover:bg-black/10 transition">
                          <ArrowUp size={20} />
                        </button>
                        <button onClick={scrollNext} aria-label="Next testimonial" className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark text-white hover:bg-brand-teal-dark transition">
                          <ArrowDown size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}