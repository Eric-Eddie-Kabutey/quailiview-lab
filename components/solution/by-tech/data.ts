import { TestingService } from './types';

export const TESTING_SERVICES: TestingService[] = [
  {
    id: 'mobile',
    category: 'Mobile App Testing',
    title: 'Mobile App Testing',
    subtitle: 'Make sure your app works flawlessly, everywhere.',
    description: 'We test across iOS, Android, and hybrid frameworks to guarantee consistent performance, smooth navigation, and error-free user experiences.',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    includes: [
      'Functional & UI testing across devices and screen sizes',
      'App performance under varying network conditions',
      'Compatibility across OS versions',
      'Usability & accessibility testing'
    ]
  },
  {
    id: 'web',
    category: 'Web Testing',
    title: 'Web Testing',
    subtitle: 'Fast, responsive, and bug-free — on any browser.',
    description: 'We test websites and web applications for speed, security, and usability across browsers, ensuring a consistent experience for every user.',
    imageUrl: 'https://picsum.photos/id/180/800/600',
    includes: [
      'Cross-browser testing (Chrome, Safari, Firefox, Edge, etc.)',
      'Functional & regression testing',
      'Web accessibility (WCAG) compliance checks',
      'Security & vulnerability testing'
    ]
  },
  {
    id: 'location',
    category: 'Location Testing',
    title: 'Location Testing',
    subtitle: 'Your app, tested in the right place, virtually or physically.',
    description: 'We validate location-dependent features, ensuring accurate geofencing, mapping, and local data handling.',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    includes: [
      'GPS accuracy verification',
      'Location-based content & pricing',
      'Geofencing trigger tests',
      'Network condition simulation'
    ]
  },
  {
    id: 'stream',
    category: 'Stream Testing',
    title: 'Stream Testing',
    subtitle: 'Smooth streaming without interruptions.',
    description: 'We test video and audio streaming services for quality, stability, and performance under real-world network conditions.',
    imageUrl: 'https://picsum.photos/id/119/800/600',
    includes: [
      'Bitrate & buffering analysis',
      'Adaptive streaming performance',
      'Playback across devices and resolutions',
      'DRM & content protection validation'
    ]
  },
  {
    id: 'device',
    category: 'Device Testing',
    title: 'Device Testing',
    subtitle: 'Your product on every screen, speaker, and sensor.',
    description: 'From wearables to smart TVs, we test your application or product across a wide range of physical and virtual devices.',
    imageUrl: 'https://picsum.photos/id/3/800/600',
    includes: [
      'Real device and emulator-based testing',
      'IoT device connectivity & performance',
      'Hardware-software interaction checks',
      'Environment-specific compatibility tests'
    ]
  },
  {
    id: 'voice',
    category: 'Voice Testing',
    title: 'Voice Testing',
    subtitle: 'Ensure voice-first experiences work every time.',
    description: 'We test voice assistants, smart speakers, and voice-enabled apps for accuracy, latency, and user experience.',
    imageUrl: 'https://picsum.photos/id/48/800/600',
    includes: [
      'Voice command recognition accuracy',
      'Multilingual voice interactions',
      'Integration with Alexa, Google Assistant, Siri',
      'Latency & responsiveness checks'
    ]
  }
];
