'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Import logos
import { MailchimpLogo } from '@/components/common/company-logos';
import {HelloSignLogo} from '@/components/common/company-logos';
import {IntercomLogo} from '@/components/common/company-logos';
import {SquareLogo} from '@/components/common/company-logos';
import {DropboxLogo} from '@/components/common/company-logos';
import {AttentiveLogo} from '@/components/common/company-logos';

const logos = [
  { component: MailchimpLogo, name: 'Mailchimp', className: 'h-8 w-auto text-slate-400' },
  { component: HelloSignLogo, name: 'HelloSign', className: 'h-6 w-auto text-slate-500' },
  { component: IntercomLogo, name: 'Intercom', className: 'h-8 w-auto text-slate-500' },
  { component: SquareLogo, name: 'Square', className: 'h-8 w-auto text-slate-500' },
  { component: DropboxLogo, name: 'Dropbox', className: 'h-8 w-auto text-slate-500' },
  { component: AttentiveLogo, name: 'Attentive', className: 'h-6 w-auto text-slate-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TrustedBy() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10">
          <p className="text-center font-medium text-slate-600">
            Trusted by 2M+ users globally
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 sm:gap-x-16"
          >
             {logos.map(({ component: Logo, name, className }) => (
              <motion.div key={name} variants={itemVariants}>
                <Logo
                  className={`${className} transition-colors duration-300 hover:text-slate-900`}
                  aria-label={`${name} logo`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}