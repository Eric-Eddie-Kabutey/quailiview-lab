
import React from 'react';

export const IndustryHeroSection: React.FC = () => {
  return (
    <section className="space-y-16 md:space-y-24">
      {/* Top Text Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        {/* Headline */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
            Tailored quality assurance for your industry’s unique needs.
          </h1>
        </div>

        {/* Description Text */}
        <div className="max-w-lg mt-4 md:mt-24 lg:mt-32">
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
            alt="Quality assurance professionals in a manufacturing environment"
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Right Image */}
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1574121215816-2c7002bc0f2c?auto=format&fit=crop&q=80&w=1200" 
            alt="Technicians inspecting equipment with digital tablets"
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};
