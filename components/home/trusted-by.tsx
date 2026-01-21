'use client'

import Image from 'next/image'
import { motion } from '@/components/module/framer-motion'

/**
 * Increased the mobile vertical padding from py-4 to py-16 to provide more 
 * breathing room on smaller screens while maintaining the desktop layout.
 */

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
}

export default function TrustedBy() {
	return (
		<section className='bg-white pt-24 pb-16 sm:pt-32 sm:pb-20'>
			<div className='mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6'>
				<div className='flex flex-col items-center gap-10'>
					<p className='text-center font-medium text-slate-600'>
						Trusted by 2M+ users globally
					</p>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						className='w-full '>
						<motion.div className='w-full' variants={itemVariants}>
							<Image
								src='/assets/images/works-with.png'
								alt='works with'
								width={600}
								height={60}
								className='object-cover w-full h-auto object-center'
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
