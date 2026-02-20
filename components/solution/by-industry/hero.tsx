
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const IndustryHeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pt-32 pb-16 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: `repeating-linear-gradient(90deg, #E2E8F0, #E2E8F0 1px, transparent 1px, transparent 120px)`,
           }}>
      </div>

      <div className="relative z-10 mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0 space-y-16 md:space-y-24">
      {/* Top Text Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
        {/* Headline */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
            Tailored quality assurance for your industry’s unique needs.
          </h1>
        </div>
 
        {/* Description Text - Aligned with bottom of H1 */}
        <div className="max-w-lg">
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal">
            Every industry comes with its own challenges, compliance regulations, user expectations, 
            performance demands, and market-specific technologies. At Qualiview Lab, we combine 
            AI-powered automation with human expertise to deliver testing solutions designed 
            for your industry, ensuring speed, accuracy, and real-world reliability.
          </p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Image */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img 
            src="/assets/images/solutions/indust/hero2.png" 
            alt="Quality assurance professionals in a manufacturing environment"
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Image */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img 
            src="/assets/images/solutions/indust/hero1.png" 
            alt="Technicians inspecting equipment with digital tablets"
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </div>
    </section>
  );
};
