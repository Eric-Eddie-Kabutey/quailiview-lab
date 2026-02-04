'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// Added Facebook and Linkedin to the imports
import { Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Events', href: '/events' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  resources: [
    { name: 'FAQs', href: '/#faq' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security & Compliance', href: '#' },
  ],
};

// Updated to use Lucide components directly
const socialLinks = [   
  { name: 'Facebook', href: 'https://www.facebook.com/share/183qfn3WZZ/', icon: Facebook },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/qualiview-lab/', icon: Linkedin },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-24 md:pb-52 overflow-hidden">
      <div className="absolute bottom-4 md:bottom-1 left-2 right-2 h-1/2 z-0 opacity-30 pointer-events-none">
        <Image
          src="/assets/logo/brand-logo.png"
          alt=""
          fill
          className="object-contain object-bottom"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 flex justify-around opacity-30 pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-gray-500" />
        ))}
      </div>

      <div className="relative z-20 mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <Link href="/" className="inline-block">
              <Image 
                src="/assets/logo/logo1.svg" 
                alt="Qualiview Lab Logo" 
                width={160} 
                height={40} 
                className="brightness-0 invert" 
              />
            </Link>
            <p className="text-sm text-gray-400 mt-24">© 2025 Qualiview Lab</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-6 space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:admin@qualiviewlab.com" className="text-gray-300 hover:text-white transition-colors">
                  admin@qualiviewlab.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Remote / Global</span>
              </li>
            </ul>
            
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name} 
                    href={social.href} 
                    aria-label={social.name} 
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}