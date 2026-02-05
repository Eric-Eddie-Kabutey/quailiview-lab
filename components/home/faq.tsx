'use client'

import { motion, Variants } from '@/components/module/framer-motion'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// Data for the FAQ section
const faqData = [
	{
		question:
			'What makes Qualiview Lab different from traditional QA services?',
		answer:
			'Unlike most QA providers, we use a hybrid model combining AI-driven automation for speed and coverage, with expert human testers for edge cases, usability, and accuracy. This gives you the best of both worlds.',
	},
	{
		question: 'How does your AI testing actually work?',
		answer:
			'Our AI engine analyzes your codebase or app, identifies test cases, and generates automated unit and functional tests. These tests run instantly, providing a baseline before our QA team steps in to validate and explore deeper issues.',
	},
	{
		question:
			'Do your human testers manually test everything again after the AI?',
		answer:
			'Not everything our testers focus on areas that AI can’t reliably evaluate, like user experience, edge case behavior, and unexpected interactions. We optimize human effort where it adds the most value.',
	},
	{
		question: 'Can you work with our existing QA or dev team?',
		answer:
			'Absolutely. We regularly integrate with in-house QA teams, product managers, and developers. We can adapt to your tools, workflows, and delivery timelines to complement not replace your existing setup.',
	},
	{
		question: 'How fast can we get started?',
		answer:
			'Most projects can begin within 1-3 business days. We’ll schedule a quick onboarding call, assess your project needs, and tailor a testing plan that suits your timelines and tech stack.',
	},
	{
		question: 'What industries or platforms do you specialize in?',
		answer:
			'We work with web apps, mobile apps, APIs, AI/ML systems, fintech platforms, retail PoS systems, and more. From enterprise-scale systems to startup MVPs, we’ve tested across industries and technologies.',
	},
]

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function FAQ() {
	return (
		<section id='faq' className='bg-[#F5FCFF] py-24 sm:py-32'>
			<div className='mx-auto max-w-3xl px-4 sm:px-6'>
				{/* Section Header */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='text-center'>
					<motion.div variants={itemVariants}>
						<p className='font-medium text-[##8E92A2]'> FAQ </p>
						<h2 className='mt-4 md:mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
							Frequently Asked Questions
						</h2>
						<p className='mt-6 md:mt-8 text-lg leading-8 text-gray-600'>
							Got questions ? We&apos;ve got answers. Here&apos;s everything you
							need to know about how Qualiview Lab blends AI and human expertise
							to deliver world - class software testing.
						</p>
					</motion.div>
				</motion.div>

				{/* Accordion List */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
					className='mt-12'>
					<Accordion type='single' collapsible className='w-full'>
						{faqData.map((item, index) => (
							<motion.div key={index} variants={itemVariants}>
								<AccordionItem
									value={`item-${index + 1}`}
									className='py-4'>
                                    <AccordionTrigger className='flex items-start text-lg font-medium text-gray-800 hover:no-underline'>
                                        <div className='flex gap-4'>
										<span className='text-gray-400'>
											{String(index + 1).padStart(2, '0')}.
										</span>
										{item.question}

                                        </div>
									</AccordionTrigger>
									<AccordionContent className='pt-2 text-base text-gray-600 leading-relaxed pl-[44px]'>
										{item.answer}
                                    </AccordionContent>
                                    <div className='border border-b-gray-200'></div>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	)
}
