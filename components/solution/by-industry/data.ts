import { IndustryService } from "./types";

export const INDUSTRY_SERVICES: IndustryService[] = [
  {
    id: "commerce-retail",
    category: "Commerce & Retail",
    title: "Commerce & Retail",
    subtitle: "Flawless shopping experiences across devices.",
    description: "We help e-commerce and retail businesses maintain fast, secure, and user-friendly platforms to keep customers engaged and converting.",
    imageUrl: "/assets/images/solutions/indust/1.png", 
    includes: [
      "Website & mobile app testing for seamless checkout",
      "Payment gateway security & compliance",
      "Performance testing during high-traffic sales events",
      "Inventory & POS system validation"
    ]
  },
  {
    id: "finance-banking",
    category: "Finance & Banking",
    title: "Finance & Banking",
    subtitle: "Security, compliance, and reliability — at scale.",
    description: "We test financial platforms for accuracy, resilience, and adherence to strict industry regulations.",
    imageUrl: "/assets/images/solutions/indust/2.png",
    includes: [
      "Functional & integration testing for banking apps",
      "Cybersecurity & fraud prevention validation",
      "Regulatory compliance (PCI-DSS, PSD2, GDPR)",
      "API testing for fintech integrations"
    ]
  },
  {
    id: "health-wellness",
    category: "Health & Wellness",
    title: "Health & Wellness",
    subtitle: "Safe, accurate, and user-friendly health applications.",
    description: "We ensure digital health products meet performance, privacy, and compliance standards.",
    imageUrl: "/assets/images/solutions/indust/3.png",
    includes: [
      "HIPAA & GDPR compliance checks",
      "Wearable device and health tracker testing",
      "Telemedicine platform validation",
      "Data accuracy & interoperability testing"
    ]
  },
  {
    id: "media-entertainment",
    category: "Media & Entertainment",
    title: "Media & Entertainment",
    subtitle: "High-quality experiences, no matter the load.",
    description: "From streaming platforms to gaming applications, we test for performance, scalability, and immersive engagement.",
    imageUrl: "/assets/images/solutions/indust/4.png",
    includes: [
      "Streaming performance & adaptive bitrate testing",
      "Mobile & console game QA",
      "Content delivery network (CDN) validation",
      "Load testing for live events"
    ]
  },
  {
    id: "learning-education",
    category: "Learning & Education",
    title: "Learning & Education",
    subtitle: "Accessible, interactive, and reliable e-learning platforms.",
    description: "We test learning management systems and educational apps to ensure smooth, engaging user experiences for all learners.",
    imageUrl: "/assets/images/solutions/indust/5.png",
    includes: [
      "Cross-device functionality checks",
      "Accessibility compliance (WCAG)",
      "Interactive feature validation (quizzes, live sessions)",
      "Performance testing for virtual classrooms"
    ]
  },
  {
    id: "mobility-travel",
    category: "Mobility & Travel",
    title: "Mobility & Travel",
    subtitle: "Testing for the speed and precision your users expect.",
    description: "We validate apps and systems that power travel booking, navigation, and mobility services.",
    imageUrl: "/assets/images/solutions/indust/6.png",
    includes: [
      "GPS and location-based service testing",
      "Multi-platform booking system validation",
      "Real-time data accuracy checks",
      "Performance under high demand"
    ]
  },
  {
    id: "software-services",
    category: "Software & Services",
    title: "Software & Services",
    subtitle: "Comprehensive QA for SaaS and enterprise platforms.",
    description: "We ensure software products are functional, secure, and ready for scale.",
    imageUrl: "/assets/images/solutions/indust/7.png",
    includes: [
      "End-to-end functional testing",
      "Integration & API validation",
      "Multi-tenant architecture checks",
      "Cloud performance optimization"
    ]
  }
];
