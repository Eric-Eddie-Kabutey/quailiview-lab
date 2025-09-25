'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import Image from 'next/image'

const formSchema = z.object({
	fullName: z.string().min(2, { message: 'Please enter your full name.' }),
	email: z.string().email({ message: 'Please enter a valid business email.' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters.' }),
	terms: z.boolean().refine((value) => value === true, {
		message: 'You must accept the terms and conditions to continue.',
	}),
})

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.1 },
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function SignUpForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { fullName: '', email: '', password: '', terms: false },
	})

	const { isSubmitting } = form.formState

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log('Creating account with:', values)
		await new Promise((resolve) => setTimeout(resolve, 1500))
		alert('Account created successfully!')
		form.reset()
	}

	return (
		<div className='border border-[#03444A] rounded-lg py-14 px-2'>
			<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
				Create a <span className='uppercase'>Free</span> Account
			</h1>
			<p className='mt-2 text-sm text-gray-600'>
				Already have an account?{' '}
				<Link
					href='/sign-in'
					className='font-medium text-[#03444A] hover:underline'>
					Sign in
				</Link>
			</p>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className='mt-8 space-y-6'>
				<motion.div variants={itemVariants}>
					<Button
						variant='outline'
						className='w-full h-12 gap-2 cursor-pointer text-black border border-[#03444A]'>
						<Image
							src='/assets/logo/g-logo.svg'
							alt='Google logo'
							width={50}
							height={50}
							className='h-5 w-5'
						/>
						Sign up with Google
					</Button>
				</motion.div>

				<motion.div variants={itemVariants} className='relative'>
					<div className='absolute inset-0 flex items-center'>
						<span className='w-full border-t border-[#03444A]' />
					</div>
					<div className='relative flex justify-center text-xs uppercase'>
						<span className='bg-white px-2 text-gray-700'>or</span>
					</div>
				</motion.div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
						<motion.div variants={itemVariants}>
							<FormField
								control={form.control}
								name='fullName'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='sr-only text-black'>
											Full name
										</FormLabel>
										<FormControl>
											<Input
												className='text-gray-800 placeholder-gray-600 py-6'
												placeholder='Full name'
												{...field}
											/>
										</FormControl>
										<FormMessage className='text-red-500' />
									</FormItem>
								)}
							/>
						</motion.div>
						<motion.div variants={itemVariants}>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='sr-only text-black' >Business Email</FormLabel>
										<FormControl>
                                            <Input
                                                className='text-gray-800 placeholder-gray-600 py-6'
												type='email'
												placeholder='Business Email'
												{...field}
											/>
										</FormControl>
										<FormMessage className='text-red-500' />
									</FormItem>
								)}
							/>
						</motion.div>
						<motion.div variants={itemVariants}>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel className='sr-only text-black'>Password</FormLabel>
										<FormControl>
                                            <Input
                                                className='text-gray-800 placeholder-gray-600 py-6'
												type='password'
												placeholder='Password'
												{...field}
											/>
										</FormControl>
										<FormMessage className='text-red-500'/>
									</FormItem>
								)}
							/>
						</motion.div>
						<motion.div variants={itemVariants}>
							<FormField
								control={form.control}
								name='terms'
								render={({ field }) => (
									<FormItem className='flex flex-row items-start space-x-3 space-y-0'>
										<FormControl>
											<Checkbox
												checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className='border border-[#03444A] text-[#03444A]'
											/>
										</FormControl>
										<div className='space-y-1 leading-none'>
											<FormLabel className='flex items-center text-[14px] sm:text-sm text-gray-600 font-normal'>
												I agree to Qualiview&apos;s{' '}
												<Link
													href='/terms'
													className='text-[#03444A] hover:underline inline-flex '>
													Terms of Service
												</Link>{' '}
												and{' '}
												<Link
													href='/privacy'
													className='text-[#03444A] hover:underline'>
													Privacy Policy
												</Link>
												.
											</FormLabel>
											<FormMessage className='text-red-500' />
										</div>
									</FormItem>
								)}
							/>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Button
								type='submit'
								className='w-full h-12 text-white font-semibold bg-[#03444A] hover:bg-[#04444A]'
								disabled={isSubmitting}>
								{isSubmitting ? (
									<Loader2 className='h-5 w-5 animate-spin' />
								) : (
									'Sign me up'
								)}
							</Button>
						</motion.div>
					</form>
				</Form>
			</motion.div>
		</div>
	)
}
