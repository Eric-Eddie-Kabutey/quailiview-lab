'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react'; 

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the email to your API here.
    // For now, we'll just log it and clear the input.
    console.log('Subscribed with email:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-3/4 max-w-lg items-center rounded-lg border border-white/30 p-1 pl-4 shadow-inner shadow-white/10"
    >
      <label htmlFor="email-subscribe" className="sr-only">
        Email Address
      </label>
      <input
        id="email-subscribe"
        type="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full flex-grow bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:ring-0"
      />
      
      {/* This button is an extension of the style you provided */}
      <button
        type="submit"
        className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold text-[#03444A] bg-white shadow-sm hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#c0683a]"
      >
        Subscribe Now
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}