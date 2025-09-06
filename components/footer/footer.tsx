'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

// Your image paths are preserved
import footerLogoBg from '/public/images/footer-logo-bg.png';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'How It Works', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Case Studies', href: '#' },
  ],
  resources: [
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Security & Compliance', href: '#' },
  ],
};

const socialLinks = [   
  { name: 'X', href: '#', icon: "/assets/icons/x.png" },
  { name: 'LinkedIn', href: '#', icon: "/assets/icons/linkedin.png" },
  { name: 'Instagram', href: '#', icon: "/assets/icons/ig.png" },
  { name: 'GitHub', href: '#', icon: "/assets/icons/github.png" },
];

// Define animation variants for the container and items
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will animate each column with a 0.2s delay
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
      {/* Background layers remain unchanged */}
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

      {/* Main Content with animations */}
      <div className="relative z-20 mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        {/* Converted the grid container to a motion.div */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Column 1: Brand and Copyright - Converted to motion.div */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <h3 className="text-lg font-semibold">Qualiview Lab</h3>
            <p className="text-sm text-gray-400 mt-24">© 2025 Qualiview Lab</p>
          </motion.div>

          {/* Column 2: Company Links - Converted to motion.div */}
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

          {/* Column 3: Resources Links - Converted to motion.div */}
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

          {/* Column 4: Connect - Converted to motion.div */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:hello@qualiviewlab.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@qualiviewlab.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Remote / Global</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} aria-label={social.name} className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                  <Image src={social.icon} alt={`${social.name} logo`} width={20} height={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}