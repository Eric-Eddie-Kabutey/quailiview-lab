'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from '@/components/module/framer-motion'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

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
import { Loader2, MapPin } from 'lucide-react'
import Image from 'next/image'
import BackgroundEffect from '../shared/background-effect'

// Zod Schema for validation
const formSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: 'Full name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    company: z.string().min(2, { message: "Please enter your company/org name" }),
    phone: z.string().refine(
        (val) => isValidPhoneNumber(val),
        { message: "Invalid phone number" }
    ),
    inquiryType: z.enum(['Project Inquiry', 'Careers', 'Support', 'Other']),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters.' }),
})

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

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log('Form submitted with values:', values)
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
                                    <Input placeholder='Enter your name' {...field} className='border border-gray-400 focus:border-[#03444A] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A]' />
                                </FormControl>
                                <FormMessage className='text-red-500' />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-black font-semibold'>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Enter your email' {...field} className='border border-gray-400 focus:border-[#03444A] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A]' />
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
                                    <FormLabel className='text-black font-semibold'>Company</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Company name' {...field} className='border border-gray-400 focus:border-[#03444A] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A]' />
                                    </FormControl>
                                    <FormMessage className='text-red-500' />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-black font-semibold'>Phone Number</FormLabel>
                                <FormControl>
                                    <PhoneInput
                                        international
                                        defaultCountry="GH"
                                        placeholder="Enter phone number"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="w-full rounded-md pl-3 border border-gray-400 text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A] bg-white h-10"
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
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl className='w-full'>
                                        <SelectTrigger className='border border-gray-400 focus:border-[#03444A] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A]'>
                                            <SelectValue placeholder='Select an inquiry type' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className='bg-[#fff] border border-gray-400 text-gray-700'>
                                        <SelectItem value='Project Inquiry'>Project Inquiry</SelectItem>
                                        <SelectItem value='Careers'>Careers</SelectItem>
                                        <SelectItem value='Support'>Support</SelectItem>
                                        <SelectItem value='Other'>Other</SelectItem>
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
                                        className='min-h-[120px] resize-none border-gray-400 focus:border-[#03444A] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-offset-[#03444A]'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className='text-red-500' />
                            </FormItem>
                        )}
                    />
                    <Button
                        type='submit'
                        className='w-full bg-[#03444A] hover:bg-[#023338] text-white font-semibold'
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

function SuccessMessage() {
    return (
        <div className='bg-[#FFFFFF] p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4 md:gap-8 items-center text-center'>
            <Image src="/assets/icons/confirm.png" alt='Form submission icon' width={100} height={100} className='w-16 h-16' />
            <h3 className='text-2xl text-black font-semibold mb-4'>
                Your Message Has Been Sent!
            </h3>
            <p className='text-gray-600 mb-4'>
                Thanks for reaching out to Qualiview Lab. Our team will get back to you within 1-2 business days.
            </p>
            <div className='flex flex-col gap-4 w-full'>
                <Button asChild className='w-full text-white bg-[#03444A] hover:bg-[#03444A]'>
                    <Link href='/blog'>Read Our Blog</Link>
                </Button>
                <Button asChild variant='outline' className='w-full'>
                    <Link href='/case-studies'>View Case Studies</Link>
                </Button>
            </div>
        </div>
    )
}

export default function ContactUs() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <section className='relative bg-[#FFFFFF] py-24 sm:py-32'>
            <BackgroundEffect lineColor='gray-400' />

            <div className='relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
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

                        <div className="space-y-10">
                            <div>
                                <h3 className='font-semibold text-[#282930] text-lg mb-4 flex items-center gap-2'>
                                    <Image src="/assets/icons/mail.png" alt="Mail" width={24} height={24} className="w-6 h-6" />
                                    Email Us
                                </h3>
                                <a href='mailto:hello@qualiviewlab.com' className='text-gray-700 hover:text-[#03444A] block'>
                                    hello@qualiviewlab.com
                                </a>
                            </div>

                          <div>
    <h3 className='font-semibold text-[#282930] text-lg mb-4 flex items-center gap-2'>
        <Image src="/assets/icons/phone.png" alt="Phone" width={24} height={24} className="w-6 h-6" />
        Call Our Offices
    </h3>
    {/* Changed from space-y-3 to a grid that splits on medium screens and up */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 uppercase">Ghana</span>
            <a href='tel:+233206061117' className='text-gray-700 hover:text-[#03444A]'>+233 206 061 117</a>
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500 uppercase">South Africa</span>
            <a href='tel:+27609825693' className='text-gray-700 hover:text-[#03444A]'>+27 609 825 693</a>
        </div>
    </div>
</div>

                            <div>
                                <h3 className='font-semibold text-[#282930] text-lg mb-4 flex items-center gap-2'>
                                    <Image src="/assets/icons/location.png" alt="Location" width={24} height={24} className="w-6 h-6" />
                                    Visit Us
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-3">
                                        <div className="flex-shrink-0 mt-1"><MapPin className="w-4 h-4 text-gray-400" /></div>
                                        <address className='text-gray-700 not-italic text-sm leading-relaxed'>
                                            <span className="font-semibold block text-gray-900 mb-1">Ghana Office</span>
                                            Earlbeam Plaza, 6 George W. Bush Highway, Accra, Ghana
                                        </address>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex-shrink-0 mt-1"><MapPin className="w-4 h-4 text-gray-400" /></div>
                                        <address className='text-gray-700 not-italic text-sm leading-relaxed'>
                                            <span className="font-semibold block text-gray-900 mb-1">South Africa Office</span>
                                            Key West, 3 Kildare Road, Milnerton, Cape Town, South Africa 7441
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className='relative lg:sticky lg:top-8'>
                        <AnimatePresence mode='wait'>
                            {!isSubmitted ? (
                                <motion.div
                                    key='form'
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.5 }}>
                                    <ContactForm onSuccess={() => setIsSubmitted(true)} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key='success'
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}>
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