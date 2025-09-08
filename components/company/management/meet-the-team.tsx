'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


type TeamMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageColor: string;
  imageBw: string;
};

const teamData: TeamMember[] = [
  // Add a placeholder member to the left for better scrolling
  { id: 0, name: 'John Doe', title: 'QA Strategist', bio: 'This a sample bio', imageColor: '/assets/images/team/micheal-james-color.png', imageBw: '/assets/images/team/micheal-james-bw.png' },
  {
    id: 1,
    name: 'Amara Brenda',
    title: 'Head of AI & Automation',
    bio: 'Amara leads the development of Qualiview Lab’s AI testing engine. With a background in machine learning and system architecture, she ensures our automation stays ahead of the curve — reliable, scalable, and smart.',
    imageColor: '/assets/images/team/amara-brenda-color.png',
    imageBw: '/assets/images/team/amara-brenda-bw.png',
  },
  {
    id: 2,
    name: 'Daniel Klay',
    title: 'Founder & CEO',
    bio: 'Daniel is a software quality veteran with over 12 years of experience in QA leadership. He launched Qualiview Lab to bridge the gap between AI-driven speed and human-level testing accuracy. When he’s not improving testing pipelines, he’s mentoring startup dev teams on quality culture.',
    imageColor: '/assets/images/team/daniel-klay-color.png',
    imageBw: '/assets/images/team/daniel-klay-bw.png',
  },
  {
    id: 3,
    name: 'Micheal James',
    title: 'QA Strategist',
    bio: 'Micheal brings 5+ years of hands-on QA experience across fintech, healthcare, and SaaS. He designs testing strategies also that combine rigorous manual testing with deep functional coverage, tailored to each client’s workflow.',
    imageColor: '/assets/images/team/micheal-james-color.png',
    imageBw: '/assets/images/team/micheal-james-bw.png',
  },
  {
    id: 4,
    name: 'Janelle Rachel',
    title: 'Client Success Director',
    bio: 'Janelle ensures our partners get the most value from our services. She works closely with engineering and product teams to align QA efforts with business goals, timelines, and technical realities.',
    imageColor: '/assets/images/team/janelle-rachel-color.png',
    imageBw: '/assets/images/team/janelle-rachel-bw.png',
  },
];

export default function MeetTheTeam() {
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
  });

  // The first member is active by default
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

        {/* Embla Carousel for Team Members */}
        <div className="mt-20 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 flex-grow-0 basis-[70%] sm:basis-[40%] md:basis-[30%] lg:basis-1/4 pl-4"
                onMouseEnter={() => setActiveMember(member)}
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeMember.id === member.id ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={member.imageColor}
                        alt={member.name}
                        fill
                        className="object-cover"                        
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* dark background is add to all members expect the active member. On hover the dark background is removed from the active member */}
                  <Image
                    src={member.imageColor}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  
                      <div className={cn('absolute', activeMember ? '' : 'inset-0 bg-gradient-to-t from-black/60 to-transparent')}></div>
                   
                  <div className="hidden absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* <div className="hidden absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-white/80">{member.title}</p>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Member Bio/Quote Section */}
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