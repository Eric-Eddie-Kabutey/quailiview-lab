'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from '@/components/module/framer-motion'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import PhoneInput, {isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import BackgroundEffect from '../shared/background-effect'

// Zod Schema for validation
const formSchema = z.object({
	fullName: z
		.string()
		.min(2, { message: 'Full name must be at least 2 characters.' }),
	email: z.string().email({ message: 'Please enter a valid email address.' }),
	company: z.string().min(5, {message: "Please enter your company/org name"}),
	phone: z.string().refine(
		(val) => isValidPhoneNumber(val), 
		{ message: "Invalid phone number" }
	),
	inquiryType: z.enum(['Project Inquiry', 'Careers', 'Support', 'Other']),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters.' }),
})

//  The Contact Form Component
function ContactForm({ onSuccess }: { onSuccess: () => void }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: '',
			email: '',
			company: '',
			phone: '',
			inquiryType: 'Project Inquiry',
			message: '',
		},
	})

	const { isSubmitting } = form.formState

	// Mimic form submission
	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('Form submitted with values:', values)
		// Simulate network delay
		await new Promise((resolve) => setTimeout(resolve, 1500))
		onSuccess()
	}

	return (
		<div className='bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-400'>
			<h3 className='text-xl text-black font-semibold text-center mb-6'>
				Talk to an expert
			</h3>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='text-black space-y-6'>
					<FormField
						control={form.control}
						name='fullName'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>Full Name</FormLabel>
								<FormControl>
									<Input placeholder='Enter your name' {...field} className='border border-gray-400 focus:border-[#03444A]' />
								</FormControl>
								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>Email Address</FormLabel>
								<FormControl>
									<Input placeholder='Enter your email address' {...field} className='border border-gray-400' />
								</FormControl>
								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='company'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>Company / Organization</FormLabel>
								<FormControl>
									<Input placeholder='Enter your company name' {...field} className='border border-gray-400' />
								</FormControl>
								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>Phone Number</FormLabel>
								<FormControl>
									
								 <PhoneInput
									international
									defaultCountry="US"
									placeholder="Enter phone number"
									value={field.value}
									onChange={field.onChange}
									className="w-full text-black font-medium border border-gray-400 rounded-md pl-3" 
        						/>
								</FormControl>

								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='inquiryType'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>How Can We Help?</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}>
									<FormControl className='w-full'>
										<SelectTrigger>
											<SelectValue placeholder='Select an inquiry type' />
										</SelectTrigger>
									</FormControl>
									<SelectContent className='bg-[#fff] border border-gray-400'>
										<SelectItem value='Project Inquiry' className='text-gray-900'>
											Project Inquiry
										</SelectItem>
										<SelectItem value='Careers' className='text-gray-900'>Careers</SelectItem>
										<SelectItem value='Support' className='text-gray-900'>Support</SelectItem>
										<SelectItem value='Other' className='text-gray-900'>Other</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-black font-semibold'>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Enter your message'
										className='resize-none text-gray-600 border border-gray-400'
										{...field}
									/>
								</FormControl>
								<FormMessage className='text-red-500' />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						className='w-full bg-[#03444A] hover:bg-[#03444A] text-white font-semibold'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2 className='mr-2 h-4 w-4 animate-spin' /> Sending...
							</>
						) : (
							'Submit'
						)}
					</Button>
				</form>
			</Form>
		</div>
	)
}

// 3. The Success Message Component
function SuccessMessage() {
	return (
		<div className='bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4 md:gap-8 items-center text-center'>            
            <Image src="/assets/icons/confirm.png" alt='Form submission icon' width={100} height={100} className='w-16 h-16' />
			<h3 className='text-2xl text-black font-semibold mb-4'>
				Your Message Has Been Sent!
			</h3>
			<p className='text-gray-600 mb-4'>
				Thanks for reaching out to Qualiview Lab. Our team has received your
				message and will get back to you within 1-2 business days.
			</p>
			<p className='text-gray-600 mb-8'>
				In the meantime, feel free to explore our latest case studies, read our
				blog, or check out upcoming events to learn more about how we&apos;re
				transforming QA with AI and human expertise.
			</p>
			<div className='flex flex-col  gap-4 w-full'>
				<Button
					asChild
					className='w-full text-white bg-[#03444A] hover:bg-[#03444A]'>
					<Link href='/blog'>Read Our Blog</Link>
				</Button>
				<Button asChild variant='outline' className='w-full dark:bg-white dark:text-gray-900'>
					<Link href='/case-studies'>View Case Studies</Link>
				</Button>
			</div>
		</div>
	)
}

// The Main Contact Section Component
export default function ContactUs() {
	const [isSubmitted, setIsSubmitted] = useState(false)

	return (
		<section className='relative bg-[#FFFFFF] py-24 sm:py-32'>
			{/* <div className='absolute inset-0 flex justify-around opacity-75 pointer-events-none'>
				{[...Array(6)].map((_, i) => (
					<div
						key={i}
						className='w-px bg-[#D9D9D9]'
						style={{ backgroundSize: '2px 8px' }}
					/>
				))}
			</div> */}
			<BackgroundEffect lineColor='gray-200' />

			<div className='relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Left Column: Info */}
					<div className='flex flex-col gap-10'>
						<div>
							<h2 className='text-4xl sm:text-5xl font-bold tracking-tight text-gray-900'>
								Let&apos;s Build Better Software Together
							</h2>
							<p className='mt-4 text-lg text-[#8E92A2]'>
								Have a project in mind? We&apos;re here to help with AI-powered,
								human-driven software testing.
							</p>
						</div>
						<div>
							<h3 className='font-semibold text-[#282930] text-lg mb-4'>Quick Contact Info</h3>
							<ul className='space-y-4 md:space-y-8'>
								<li className='flex items-center gap-4'>
									<div className='w-12 h-12 flex items-center justify-center rounded-full'>                                       
                                        <Image src="/assets/icons/mail.png" alt="Mail icon" width={24} height={24} className='w-10 h-10' />
									</div>
									<a
										href='mailto:hello@qualiviewlab.com'
										className='text-gray-700 hover:text-brand-teal'>
										hello@qualiviewlab.com
									</a>
								</li>
								<li className='flex items-center gap-4'>
									<div className='w-12 h-12 flex items-center justify-center rounded-full'>
										<Image src="/assets/icons/phone.png" alt="Phone icon" width={24} height={24} className='w-10 h-10' />
									</div>
									<a
										href='tel:+15551234567'
										className='text-gray-700 hover:text-brand-teal'>
										+1 (555) 123-4567
									</a>
								</li>
								<li className='flex items-center gap-4'>
									<div className='w-12 h-12 flex items-center justify-center rounded-full'>
										<Image src="/assets/icons/location.png" alt="Location icon" width={24} height={24} className='w-10 h-10' />
									</div>
									<address className='text-gray-700 not-italic'>
										120 Innovation Drive, San Francisco, CA 94103
									</address>
								</li>
							</ul>
						</div>
					</div>

					{/* Right Column: Form / Success Message */}
					<div className='relative'>
						<AnimatePresence mode='wait'>
							{!isSubmitted ? (
								<motion.div
									key='form'
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -30 }}
									transition={{ duration: 0.5, ease: 'easeOut' }}>
									<ContactForm onSuccess={() => setIsSubmitted(true)} />
								</motion.div>
							) : (
								<motion.div
									key='success'
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -30 }}
									transition={{ duration: 0.5, ease: 'easeOut' }}>
									<SuccessMessage />
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	)
}
