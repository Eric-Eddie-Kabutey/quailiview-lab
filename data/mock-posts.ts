import { Post } from '@/lib/types/post';

// Import placeholder images
import img1 from '../public/assets/images/blog/avoid-these-7-common-compliance-testing-mistakes.png';
import img2 from '../public/assets/images/blog/the-future-of-gain-health-&-wellness-apps.png';
import img3 from '../public/assets/images/blog/cross-browser-testing-why-it-still-matters-in-2025.png';
import img4 from '../public/assets/images/blog/why-your-mobile-app-fails-in-real-world-conditions-and-how-to-fix-It.png';
import img5 from '../public/assets/images/blog/testing-ai-models-for-bias-a-practical-guide.png';
import img6 from '../public/assets/images/blog/how-retail-apps-can-reduce-checkout-abandonment-with-better-qa.png';

export const mockPosts: Post[] = [
    {
        slug: '7-common-compliance-testing-mistakes',
        title: 'Avoid These 7 Common Compliance Testing Mistakes',
        category: 'Security & Compliance',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 24, 2025',
        readingTime: 6,
        summary: 'Compliance isn’t just about checking boxes. It’s about protecting your business from costly security breaches.',
        coverImage: img1,
        content: '', // Content is not needed for the card view
    },
    {
        slug: 'future-of-qa-in-health-and-wellness',
        title: 'The Future of QA in Health & Wellness Apps',
        category: 'Industry Trends',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 25, 2025',
        readingTime: 5,
        summary: 'Data security, device connectivity, and compliance, here’s what QA teams need to know in the growing digital health sector.',
        coverImage: img2,
        content: '',
    },
    {
        slug: 'cross-browser-testing-why-it-still-matters',
        title: 'Cross-Browser Testing: Why It Still Matters in 2025',
        category: 'Web Testing',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 26, 2025',
        readingTime: 4,
        summary: 'Even in the era of responsive design, browser differences can break your user experience. Here’s how to prevent it.',
        coverImage: img3,
        content: '',
    },
    {
        slug: 'why-mobile-app-fails-in-real-world',
        title: 'Why Your Mobile App Fails in Real-World Conditions (and How to Fix It)',
        category: 'Mobile App Testing',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 27, 2025',
        readingTime: 7,
        summary: 'Lab testing isn’t enough, here’s how to simulate real-world devices, networks, and user behaviors to catch issues before your users do.',
        coverImage: img4,
        content: '',
    },
    {
        slug: 'testing-ai-models-for-bias',
        title: 'Testing AI Models for Bias: A Practical Guide',
        category: 'AI & Emerging Tech Assurance',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 28, 2025',
        readingTime: 8,
        summary: 'From training data audits to output monitoring, learn how to make your AI systems fair, accurate, and user-friendly.',
        coverImage: img5,
        content: '',
    },
    {
        slug: 'retail-apps-reduce-checkout-abandonment',
        title: 'How Retail Apps Can Reduce Checkout Abandonment with Better QA',
        category: 'Industry Trends',
        author: 'Qualiview Lab Team',
        publishedDate: 'Aug 29, 2025',
        readingTime: 6,
        summary: 'Speed, trust, and usability all impact checkout conversion. See how targeted testing can help you win more sales.',
        coverImage: img6,
        content: '',
    },
];