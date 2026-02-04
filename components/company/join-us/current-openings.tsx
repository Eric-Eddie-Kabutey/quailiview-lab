'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Link from 'next/link';
import { MapPin, CalendarDays, Banknote, Globe, Mail } from 'lucide-react';
import BackgroundEffect from '@/components/shared/background-effect';

// Define styles for different job tags for easy reuse
const tagStyles: { [key: string]: string } = {
  Technology: 'bg-purple-100 text-purple-700 border border-purple-200',
  Analyst: 'bg-orange-100 text-orange-700 border border-orange-200',
  'Software Engineer': 'bg-blue-100 text-blue-700 border border-blue-200',
  Business: 'bg-green-100 text-green-700 border border-green-200',
};

// Data for the job openings
const jobOpenings = [
  {
    tag: 'Analyst',
    title: 'Junior Software Test Analyst (Manual Testing) – Contract',
    description: 'We are looking for Junior Software Test Analysts who are passionate about manual testing, quality, and understanding how software products work end-to-end. You will support fast-paced Agile teams on real startup products.',
    location: 'Remote (West Africa based)',
    type: 'Contract (1–2 years exp)',
    salary: 'Competitive',
    applyLink: '#',
  },
  {
    tag: 'Business',
    title: 'Client Acquisition & Partnerships Lead – Startups (Contract)',
    description: 'Responsible for bringing clients into QualiView Labs. You will engage with startup founders, product teams, incubators, and agencies to identify testing needs and position Qualiview Labs as a trusted quality partner.',
    location: 'Remote (West Africa focus)',
    type: 'Contract (2–5 years exp)',
    salary: 'Competitive',
    applyLink: '#',
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CurrentOpenings() {
  return (
    <section className="relative bg-[#fff] py-24 sm:py-32">

      {/* Dotted background with a lighter color for visibility */}
      <BackgroundEffect lineColor='gray-400' />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="font-semibold text-[#03444A]">JOBS</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Current Openings
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re always looking for talented QA professionals, AI/ML testing experts, and performance engineers to join our global team.
          </p>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 space-y-12"
        >
          {jobOpenings.map((job) => (
            <motion.div
              key={job.title}
              variants={itemVariants}
              className="border-b border-gray-200 pb-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <span className={`inline-block rounded-lg px-3 py-1 text-sm font-semibold ${tagStyles[job.tag] || ''}`}>
                    {job.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </div>
                <Link href={job.applyLink} className="w-21 md:w-auto mt-4 sm:mt-0 sm:ml-6 px-6 py-2 text-sm text-[#03444A] font-semibold border border-[#03444A] rounded-md hover:bg-gray-100 transition-colors flex-shrink-0">
                  Apply
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-800">
                <div className="flex items-center gap-2"><MapPin size={16} />{job.location}</div>
                <div className="flex items-center gap-2"><CalendarDays size={16} />{job.type}</div>
                <div className="flex items-center gap-2"><Banknote size={16} />{job.salary}</div>
              </div>
            </motion.div>
          ))}
          
          {/* "Don't See a Role" Section */}
          <motion.div variants={itemVariants} className="text-center">
            <Globe size={24} className="mx-auto text-gray-500" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Don&apos;t See a Role That Fits?
            </h3>
            <p className="mt-2 text-gray-600">
              We&apos;re always growing our network of testers and QA professionals. Send us your resume, and we&apos;ll reach out when something matches your skills.
            </p>
            <div className="mt-6">
              <a href="mailto:admin@qualiviewlab.com" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-[#03444A] rounded-lg shadow-sm hover:bg-[#03444A] transition-colors">
                <Mail size={16} />
                admin@qualiviewlab.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}