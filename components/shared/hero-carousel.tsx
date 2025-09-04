'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HeroCarouselProps<T> {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  carouselTitle: string;
  items: T[];
  renderCard: (item: T) => React.ReactNode;
}

export default function HeroCarousel<T extends { slug: string }>({
  eyebrow, title, subtitle, carouselTitle, items, renderCard,
}: HeroCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-brand-dark text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-white/50" />
        ))}
      </div>

      <div className="relative mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-semibold text-white/80">{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-white/70">{subtitle}</p>
        </div>

        <div className="mt-16 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{carouselTitle}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 disabled:opacity-30 hover:bg-white/10 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 -mx-4 sm:-mx-6 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item) => (
              <div key={item.slug} className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 px-4 sm:px-6">
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}