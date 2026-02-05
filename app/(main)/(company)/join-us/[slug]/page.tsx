'use client';

import { jobOpenings } from '@/data/mock-jobs';
import { useParams, notFound } from 'next/navigation';
import { motion } from '@/components/module/framer-motion';
import { MapPin, Users, ChevronLeft, Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';
import BackgroundEffect from '@/components/shared/background-effect';

export default function JobDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  const job = jobOpenings.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <section className="relative bg-[#fff] py-24 sm:py-32 overflow-hidden">
      <BackgroundEffect lineColor='gray-400' />
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <Link 
          href="/join-us" 
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#03444A] transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back to Openings
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-200">
            <div>
              <span className="inline-block rounded-lg bg-blue-50 text-[#03444A] px-3 py-1 text-sm font-semibold border border-blue-100 mb-4">
                {job.tag}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{job.title}</h1>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2"><MapPin size={18} className="text-[#03444A]" />{job.location}</div>
                <div className="flex items-center gap-2"><Briefcase size={18} className="text-[#03444A]" />{job.experience}</div>
                {job.openings && (
                  <div className="flex items-center gap-2"><Users size={18} className="text-[#03444A]" />{job.openings} Openings</div>
                )}
              </div>
            </div>
           
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Role Overview</h2>
                <p className="whitespace-pre-line">{job.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills & Experience</h2>
                <ul className="list-disc pl-5 space-y-3">
                  {job.requiredSkills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {job.platformKnowledge && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform & Tool Knowledge</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    {job.platformKnowledge.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {job.niceToHave && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Nice to Have</h2>
                  <ul className="list-disc pl-5 space-y-3">
                    {job.niceToHave.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Job Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-500 whitespace-nowrap">Location</span>
                    <span className="font-medium text-gray-900 text-right">{job.location}</span>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-gray-500 whitespace-nowrap">Experience</span>
                    <span className="font-medium text-gray-900 text-right">{job.experience}</span>
                  </div>
                  {job.openings && (
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-gray-500 whitespace-nowrap">Openings</span>
                      <span className="font-medium text-gray-900 text-right">{job.openings}</span>
                    </div>
                  )}
                </div>
                <hr className="my-6 border-gray-200" />
                <a 
                  href="mailto:admin@qualiviewlab.com" 
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-white bg-[#03444A] rounded-lg hover:bg-[#03444A]/90 transition-colors"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
