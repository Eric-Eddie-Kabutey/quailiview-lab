import React from 'react';
import { IndustryService } from './types';

interface IndustryServiceSectionProps {
  service: IndustryService;
  index: number;
}

const IndustryServiceSection: React.FC<IndustryServiceSectionProps> = ({ service, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <section className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 py-16 md:py-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      {/* Image Container with Premium Shadow and Rounded Corners */}
      <div className="w-full md:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-teal-500/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <img
            src={service.imageUrl}
            alt={service.title}
            className="relative w-full h-auto rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 object-cover aspect-[4/3] border border-gray-100"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6">
        <div className="space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-wider">
            {service.category}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-xl font-medium text-gray-700 leading-snug">
            {service.subtitle}
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
          {service.description}
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#03444A]">
            Includes:
          </h4>
          <ul className="flex flex-col gap-3">
            {service.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item">
                <span className="mt-2 w-2 h-2 rounded-full bg-teal-500/40 group-hover/item:bg-teal-500 transition-colors shrink-0"></span>
                <span className="text-base text-gray-600 leading-tight group-hover/item:text-gray-900 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustryServiceSection;
