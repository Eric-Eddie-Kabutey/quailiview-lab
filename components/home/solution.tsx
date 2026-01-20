'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Settings, CheckCircle, ClipboardList, TrendingUp } from 'lucide-react';
import BackgroundEffect from '../shared/background-effect';

const techIcons = [
  { icon: Settings },
  { icon: CheckCircle },
  { icon: ClipboardList },
  { icon: TrendingUp },
];

const SolutionCard = ({
  title,
  description,
  visual,
  cardBgColor,
  visualBgColor,
  animationDelay = 0,
}: {
  title: string;
  description: string;
  visual: React.ReactNode;
  cardBgColor: string;
  visualBgColor: string;
  animationDelay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: animationDelay }}
    className={`rounded-2xl shadow-sm overflow-hidden ${cardBgColor}`}
  >
    <div className="flex items-end min-h-[300px]">
      <div className="w-1/2 md:w-3/5 p-12 md:p-16 flex items-center">
        <h3 className="text-lg md:text-3xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className={`w-1/2 md:w-2/5 p-10 md:p-12 ${visualBgColor}`}>
        {visual}
      </div>
    </div>
    
    <div className="p-12 md:p-16 border-t border-gray-300/50">
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function SolutionsSection() {
  return (
    // Changed sm:pb-20 to sm:pb-10 to reduce gap significantly
    <section id='solutions' className="relative -mt-1 sm:mt-0 bg-white pt-12 pb-12 sm:pt-48 sm:pb-32 overflow-hidden">
      <BackgroundEffect lineColor='gray-400' />

      <div className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-medium text-[#8E92A2]">SOLUTIONS</p>
          <h2 className="mt-2 md:mt-6 text-4xl font-semibold tracking-tight leading-13 text-gray-900 sm:text-5xl">
            Comprehensive Software Solutions, Built for the Future
          </h2>
          <p className="mt-3 md:mt-8 text-lg leading-8 text-gray-600">
            From foundational functional tests to cutting-edge AI model validation, we cover every layer of your quality assurance needs.
          </p>
        </div>

        <div className="mt-12 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <SolutionCard
            title="By Capability"
            description="Comprehensive testing solutions across technologies from functional and performance testing to AI assurance and security compliance, we deliver end-to-end quality assurance services that ensure your applications are reliable, secure, and ready for market."
            cardBgColor="bg-[#eef3f3]"
            visualBgColor="bg-[#0f4c5c]"
            visual={<Image width={100} height={100} src="/assets/icons/capacity.png" alt="Capability UI mockup" className="rounded-lg shadow-lg w-full max-w-[200px] h-full" />}
          />
          
          <div className="flex flex-col gap-16 lg:gap-32">
            <SolutionCard
              title="By Technology"
              description="Multi-Platform testing expertise across all devices and channels comprehensive testing solutions for mobile apps, web applications, location-based services, streaming platforms, connected devices, and voice interfaces to ensure seamless user experiences across every touchpoint."
              cardBgColor="bg-[#fcf8f1]"
              visualBgColor="bg-[#f9f2e7]"
              animationDelay={0.2}
              visual={
                <div className="grid grid-cols-2 gap-4 h-full">
                  {techIcons.map((Item, index) => (
                    <div key={index} className="bg-white p-4 rounded-full shadow-sm flex justify-center items-center">
                      <Item.icon className="w-6 h-auto text-[#d97706]" />
                    </div>
                  ))}
                </div>
              }
            />

            <SolutionCard
              title="By Industry"
              description="Industry-Specialized testing solutions across all sectors tailored quality assurance services designed for the unique requirements of commerce, finance, healthcare, media, education, travel, and software industries to ensure compliance and optimal user experiences."
              cardBgColor="bg-[#fcf8f1]"
              visualBgColor="bg-[#c0683a]"
              animationDelay={0.4}
              visual={
                <div className='flex flex-col gap-4 justify-center items-center h-full'>
                  <Image width={100} height={100} src="/assets/icons/icon1.png" alt="Industry UI mockup" className="block rounded-lg shadow-lg w-full max-w-[200px]" />
                  <Image width={100} height={100} src="/assets/icons/icon2.png" alt="Industry UI mockup" className="rounded-lg shadow-lg w-full max-w-[200px]" />
                  <Image width={100} height={100} src="/assets/icons/icon3.png" alt="Industry UI mockup" className="rounded-lg shadow-lg w-full max-w-[200px]" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
