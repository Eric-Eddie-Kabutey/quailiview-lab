'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {motion, Variants} from '@/components/module/framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface ContentCarouselHeroProps {
	eyebrow: string
	title: React.ReactNode
	subtitle: string
	carouselTitle: string
	children: React.ReactNode // CRITICAL: We now accept children
}

export default function ContentCarouselHero({
	eyebrow,
	title,
	subtitle,
	carouselTitle,
	children,
}: ContentCarouselHeroProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

	const scrollPrev = useCallback(
		() => emblaApi && emblaApi.scrollPrev(),
		[emblaApi]
	)
	const scrollNext = useCallback(
		() => emblaApi && emblaApi.scrollNext(),
		[emblaApi]
	)

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setPrevBtnDisabled(!emblaApi.canScrollPrev())
		setNextBtnDisabled(!emblaApi.canScrollNext())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('reInit', onSelect)
		emblaApi.on('select', onSelect)
    }, [ emblaApi, onSelect ])
    
     const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    };
    
    const itemVariants: Variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

	return (
		<section className='relative bg-[#03444A] text-white py-24 sm:py-32 overflow-hidden'>
			<div className='absolute inset-0 flex justify-around opacity-20 pointer-events-none'>
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className='w-px border-r border-dashed border-white/50'
					/>
				))}
			</div>
            <motion.div
                 variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
                className='relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0'>
                <motion.div variants={itemVariants} className='text-center'>
                    <p className='font-semibold text-white/80'>{eyebrow}</p>

                    <div className='max-w-[940px] mx-auto'>
                        <h1 className='mt-6 md:mt-10 text-4xl font-bold tracking-tight leading-10 md:leading-13 sm:text-5xl'>
                            {title}
                        </h1>
                        <p className='mt-6 md:mt-14 text-lg leading-8 text-white/70'>{subtitle}</p>
                    </div>
                    <div className='mt-16 flex justify-between items-center'>
                        <h2 className='text-2xl font-semibold'>{carouselTitle}</h2>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={scrollPrev}
                                disabled={prevBtnDisabled}
                                className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 disabled:opacity-30 hover:bg-white/10 transition-colors'>
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={scrollNext}
                                disabled={nextBtnDisabled}
                                className='w-10 h-10 flex items-center justify-center rounded-full border border-white/20 disabled:opacity-30 hover:bg-white/10 transition-colors'>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
				<div className='mt-8 -mx-4 sm:-mx-6 overflow-hidden' ref={emblaRef}>
					{/* We render the children passed from the server here */}
					<motion.div variants={itemVariants} className='flex'>{children}</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
