'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function NewsletterSubscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send the email to your API here.
    console.log('Subscribing with email:', values.email);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
    alert(`Thank you for subscribing with ${values.email}!`);
    form.reset(); // Clear the form on successful submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email Address</FormLabel>              
              <div className="relative flex items-center rounded-lg border border-white/30 pl-4 shadow-inner shadow-white/10 has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-white has-[input:focus-visible]:ring-offset-2 has-[input:focus-visible]:ring-offset-[#c0683a] transition-all">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email Address"                   
                    className="flex-grow mr-2 border-0 bg-transparent text-white shadow-none placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="submit"
                  disabled={isSubmitting}                 
                  className="flex-shrink-0 gap-2 rounded-md px-6 py-3 h-auto font-semibold text-[#03444A] bg-white shadow-sm hover:bg-gray-100 transition-colors"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Subscribe Now                                     
                      <Image src="/assets/icons/arrow-up-right.png" alt="Arrow Up Right" width={16} height={16} />
                    </>
                  )}
                </Button>
              </div>
              <FormMessage className="text-red-100 pt-2" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}