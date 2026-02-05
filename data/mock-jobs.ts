export interface JobOpening {
  slug: string;
  tag: 'Analyst' | 'Business' | 'Technology' | 'Software Engineer';
  title: string;
  description: string;
  location: string;
  experience: string;
  openings?: number;
  overview: string;
  responsibilities: string[];
  requiredSkills: string[];
  platformKnowledge?: string[];
  niceToHave?: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    slug: 'junior-software-test-analyst',
    tag: 'Analyst',
    title: 'Junior Software Test Analyst (Manual Testing) Contract',
    description: 'We are looking for Junior Software Test Analysts who are passionate about manual testing, quality, and understanding how software products work end-to-end. You will support fast-paced Agile teams on real startup products.',
    location: 'Remote (West Africa - based preferred)',
    experience: '1–2 years',
    openings: 2,
    overview: 'We are looking for Junior Software Test Analysts who are passionate about manual testing, quality, and understanding how software products work end-to-end. You will work on real startup products across web, API, and mobile platforms, supporting fast-paced Agile teams.\n\nThis role is purely manual testing.',
    responsibilities: [
      'Execute manual functional, regression, smoke, and exploratory testing',
      'Review and understand: Business requirements, User stories, Acceptance criteria',
      'Design, execute, and maintain manual test cases',
      'Identify, log, track, and retest defects',
      'Validate fixes before release',
      'Perform basic API testing to validate backend functionality',
      'Participate in Agile ceremonies: Daily stand-ups, Sprint planning, Reviews & retrospectives',
      'Contribute to QA documentation and test evidence'
    ],
    requiredSkills: [
      '1–3 years experience as a Manual Tester / Software Test Analyst',
      'Solid understanding of: SDLC, STLC, Bug lifecycle',
      'Experience working in an Agile / Scrum environment',
      'Strong attention to detail and analytical thinking',
      'Ability to clearly communicate findings in English',
      'Comfortable working independently and within distributed teams'
    ],
    platformKnowledge: [
      'Jira defect and test management',
      'Confluence documentation',
      'BrowserStack cross-browser and device testing',
      'Postman basic API testing (GET, POST, validations)',
      'Web and/or mobile application testing'
    ],
    niceToHave: [
      'Exposure to mobile testing (Android / iOS)',
      'Experience testing startup or fast-changing products',
      'Willingness to learn automation in the future'
    ]
  },
  {
    slug: 'client-acquisition-partnerships-lead',
    tag: 'Business',
    title: 'Client Acquisition & Partnerships Lead Startups (Contract)',
    description: 'Responsible for bringing clients into QualiView Labs. You will engage with startup founders, product teams, incubators, and agencies to identify testing needs and position Qualiview Labs as a trusted quality partner.',
    location: 'Remote (West Africa focus)',
    experience: '2–5 years',
    overview: 'This role is responsible for bringing clients into QualiView Labs. You will engage with startup founders, product teams, incubators, and agencies to identify testing needs and position Qualiview Labs as a trusted quality partner.\n\nThis is a consultative, relationship-driven role.',
    responsibilities: [
      'Identify and engage early-stage and scaling startups',
      'Build partnerships with: Startup founders, Tech hubs & accelerators, Digital agencies and dev teams',
      'Understand client challenges and quality gaps',
      'Present Qualiview Labs’ testing services clearly',
      'Support proposal creation and onboarding',
      'Maintain a simple lead and pipeline tracker',
      'Represent the company professionally across channels'
    ],
    requiredSkills: [
      'Experience in: Client acquisition, Partnerships, Consulting or tech services',
      'Strong communication and negotiation skills',
      'Understanding of software products or digital services',
      'Ability to engage confidently with startup stakeholders',
      'Fluent professional English (written and spoken)'
    ],
    niceToHave: [
      'Existing startup ecosystem connections',
      'Experience selling professional or technical services',
      'Familiarity with African startup markets'
    ]
  },
];
