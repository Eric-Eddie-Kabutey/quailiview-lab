'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type TeamMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageColor: string;
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Edith E.A. Abofra',
    title: 'Executive Director',
    bio: 'With an IT background dating back to 2014, Edith brings seven years of focused experience in software testing, test management, and quality leadership. Her work centres on helping engineering and QA leaders embed quality as a strategic part of product delivery.',
    imageColor: '/assets/images/team/21.jpg', 
  },
  {
    id: 2,
    name: 'Emily Murungi Muganzi',
    title: 'Operational Excellence: Independent Advisor',
    bio: 'With over 14 years of experience with a good specialist background in improving organisational effectiveness and delivery models, Emily provides independent advisory support focused on operational excellence, process maturity, and sustainable scale.',
    imageColor: '/assets/images/team/1.jpg',
  },
  {
    id: 3,
    name: 'Lionel F. Mangoua',
    title: 'Chief Technology Officer',
    bio: 'With over nine years of experience in software testing and automation, Lionel has worked across FinTech, E-Commerce, and software testing environments globally. His work includes building automation frameworks and using AI-enabled testing techniques.',
    imageColor: '/placeholder.svg',
  },
];

export default function MeetTheTeam() {
  // Keeping the logic where the first member is active by default
  const [activeMember, setActiveMember] = useState(teamData[0]);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold tracking-tight leading-13 text-gray-900 sm:text-5xl">
            Meet the Team Behind Qualiview Lab
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re a hybrid team of QA engineers, AI specialists, and product thinkers, united by a mission to improve how software gets tested.
          </p>
        </div>

        {/* 3-Column Grid (Replacing Embla) */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="w-full"
              onMouseEnter={() => setActiveMember(member)}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                {/* Image logic exactly as you had it */}
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeMember.id === member.id ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute inset-0 z-10"
                  >
                    <Image
                      src={member.imageColor}
                      alt={member.name}
                      fill
                      className="object-cover"                        
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Base Image */}
                <Image
                  src={member.imageColor}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay logic from your original code */}
                <div className={cn(
                  'absolute inset-0 transition-opacity duration-300 z-20', 
                  activeMember.id === member.id ? 'bg-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'
                )}></div>

                {/* Name and Title Overlay (Optional, but helps identify them) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30 text-white">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Member Bio/Quote Section (Exactly as before) */}
        <div className="relative mt-16 h-32 max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMember.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="text-3xl font-serif text-gray-300 absolute -top-2 left-0">“</span>
                {activeMember.bio}
                <span className="text-3xl font-serif text-gray-300 absolute -bottom-4 right-0">”</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}