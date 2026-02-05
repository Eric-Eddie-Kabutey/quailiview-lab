'use client';

import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

// Define the props for our reusable card
export interface FeatureDetailCardProps {
  title: string;
  subtitle: string;
  description: string;
  featuresTitle: string;
  features: { text: string; subtext?: string }[];
  image: string;
  imagePosition: 'left' | 'right';
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export function FeatureDetailCard({
  title,
  subtitle,
  description,
  featuresTitle,
  features,
  image,
  imagePosition = 'left', // Default to left
}: FeatureDetailCardProps) {
  const imageColumn = (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"        
      />
    </div>
  );

  const textColumn = (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-xl font-medium text-white/90">{subtitle}</p>
      <p className="text-white/80 leading-relaxed">{description}</p>
      <div>
        <h4 className="font-semibold mt-4">{featuresTitle}</h4>
        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 text-white/70 flex-shrink-0" />
              <span>
                <span className="font-medium text-white/90">{feature.text}</span>
                {feature.subtext && <span className="text-white/70"> {feature.subtext}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      {imagePosition === 'left' ? (
        <>
          {imageColumn}
          {textColumn}
        </>
      ) : (
        <>
          {textColumn}
          {imageColumn}
        </>
      )}
    </motion.div>
  );
}