'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid business email.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Signing in with:', values);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Handle actual login logic here
    alert('Login successful!');
  }

  return (
    <div className='border border-[#03444A] rounded-lg py-14 px-2'>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
        Sign in
      </h1>
      
      <div className="space-y-6">
        <Button variant="outline" className="w-full h-12 gap-2 text-black border border-[#03444A] cursor-pointer">                  
            <Image src='/assets/logo/g-logo.svg' alt='Google logo' width={50} height={50} className='h-5 w-5' />
          Sign in with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[#03444A]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-700">or</span>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only text-black">Business Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Business Email" {...field} className='text-gray-800 placeholder-gray-600 py-6' />
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only text-black">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} className='text-gray-800 placeholder-gray-600 py-6' />
                  </FormControl>
                  <FormMessage className='text-red-500' />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-12 text-white bg-[#03444A] hover:bg-[#02444A]" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Sign me in'
              )}
            </Button>
          </form>
        </Form>
        
        <div className="flex items-center justify-between text-sm">
          <Link href="/sign-up" className="font-medium text-[#03444A] hover:underline">
            Sign up
          </Link>
          <Link href="/forgot-password" className="font-medium text-[#03444A] hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}