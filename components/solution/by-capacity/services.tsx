'use client';

import { motion } from '@/components/module/framer-motion';
import { FeatureDetailCard, FeatureDetailCardProps } from '@/components/shared/featured-detail-card';


// All data for the service offerings is managed here
const servicesData: Omit<FeatureDetailCardProps, 'featuresTitle'>[] = [
  {
    title: 'Functional Testing Services',
    subtitle: 'Ensure every feature works as intended, every time.',
    description: 'We verify that your application’s features behave exactly as specified, across devices, environments, and versions. Our hybrid approach blends automation for speed with manual testing for depth.',
    features: [
      { text: 'Manual Testing', subtext: 'Human-led exploration to catch issues automation may miss.' },
      { text: 'Automated Testing', subtext: 'Faster regression coverage using modern tools like Selenium, Cypress, and Playwright.' },
      { text: 'Regression Testing', subtext: 'Ensure new code changes don’t break existing features.' },
      { text: 'Integration Testing', subtext: 'Validate communication between modules, APIs, and systems.' },
      { text: 'IV&V (Independent Verification & Validation)', subtext: 'Unbiased quality checks from an external expert perspective.' },
    ],
    image: '/assets/images/solutions/functional-service-testing.png',
    imagePosition: 'left',
  },
  {
    title: 'Performance & Reliability Testing',
    subtitle: 'Your software should be fast, stable, and ready for scale.',
    description: 'We simulate real-world usage conditions to ensure your application stays responsive under peak loads and maintains performance over time.',
    features: [
      { text: 'Load & Stress Testing', subtext: 'Measure capacity limits and identify bottlenecks.' },
      { text: 'Performance Benchmarking', subtext: 'Compare against industry standards and competitors.' },
      { text: 'ETL Testing', subtext: 'Validate data extraction, transformation, and loading processes.' },
      { text: 'PoS Testing', subtext: 'Ensure point-of-sale systems remain reliable under pressure.' },
      { text: 'Service Virtualization', subtext: 'Test even when dependent services aren’t available.' },
    ],
    image: '/assets/images/solutions/performance-reliability-testing.png',
    imagePosition: 'right',
  },
  {
    title: 'AI & Emerging Tech Assurance',
    subtitle: 'Quality assurance for the next generation of technology.',
    description: 'AI, AR/VR, and other emerging technologies require specialized testing approaches to ensure accuracy, fairness, and usability.',
    features: [
      { text: 'AI/ML Model Testing', subtext: 'Validate accuracy, reliability, and bias in machine learning models.' },
      { text: 'Multilingual NLP Assurance', subtext: 'Ensure natural language processing works across languages and dialects.' },
      { text: 'XR (Extended Reality) Assurance', subtext: 'Test VR, AR, and MR experiences for performance, interaction accuracy, and comfort.' },
    ],
    image: '/assets/images/solutions/ai-emerging-tech-assurance.png',
    imagePosition: 'left',
  },
  {
    title: 'Security & Compliance Testing',
    subtitle: 'Protect your users, data, and brand reputation.',
    description: 'We test for vulnerabilities and compliance gaps so you can meet industry regulations and safeguard your application from threats.',
    features: [
      { text: 'Cybersecurity Testing', subtext: 'Identify and mitigate security risks before they become breaches.' },
      { text: 'Compliance & Regulatory Testing', subtext: 'Ensure alignment with GDPR, HIPAA, PCI-DSS, and other standards.' },
      { text: 'Payments Testing', subtext: 'Validate secure and seamless payment transactions.' },
    ],
    image: '/assets/images/solutions/security-compliance-testing.png',
    imagePosition: 'right',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};

export default function ServiceOfferings() {
  return (
    <section className="relative bg-[#CA6E1D] text-white py-24 sm:py-32">
      {/* Optional: Dotted background with a lighter color */}
      <div className="absolute inset-0 flex justify-around opacity-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-px border-r border-dashed border-white" />
        ))}
      </div>

      <div className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        {/* Section Header */}
        <div className="text-center">
          <p className="font-semibold text-white/80">OUR CAPABILITIES</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Testing Services
          </h2>
        </div>

        {/* List of Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-24 flex flex-col gap-24"
        >
          {servicesData.map((service, index) => (
            <FeatureDetailCard
              key={index}
              {...service}
              // The `featuresTitle` is dynamic based on the service name
              featuresTitle={`Our ${service.title.split(' ')[0]} Testing includes:`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}