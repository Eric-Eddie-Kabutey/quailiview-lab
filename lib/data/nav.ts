import {
    Info, Briefcase, FileText, Newspaper, Calendar, GraduationCap,
    Cog, MonitorSmartphone, GanttChartSquare, ShieldCheck,
    Server, Mic, Banknote, Building2, HeartPulse, Clapperboard,
    BookOpen, Plane, Laptop, Users, Rocket
} from 'lucide-react';
import { NavItem } from '../types/nav';


export const navigationData: NavItem[] = [
    {
        label: 'Company',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'simple',
            items: [
                { title: 'About Us', href: '/about-us', description: 'Innovative solutions, exceptional value, industry expertise.', icon: Info },
                { title: 'Management', href: '/management', description: 'Experienced leaders driving growth and innovation.', icon: Users },
                { title: 'Join Us', href: '/join-us', description: 'Great careers, competitive benefits, dynamic team.', icon: Rocket },
            ],
        },
    },
    {
        label: 'Solutions',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'services',
            columns: [
                {
                    title: 'By Capability',
                    links: [
                        { title: 'Functional Testing', href: '#', icon: Cog },
                        { title: 'Performance Testing', href: '#', icon: GanttChartSquare },
                        { title: 'AI & Emerge Tech Assurance', href: '#', icon: Briefcase },
                        { title: 'Security & Compliance', href: '#', icon: ShieldCheck },
                    ],
                },
                {
                    title: 'By Technology',
                    links: [
                        { title: 'Mobile App Testing', href: '#', icon: MonitorSmartphone },
                        { title: 'Web Testing', href: '#', icon: Laptop },
                        { title: 'Location Testing', href: '#', icon: Server },
                        { title: 'Stream Testing', href: '#', icon: Clapperboard },
                        { title: 'Device Testing', href: '#', icon: MonitorSmartphone },
                        { title: 'Voice Testing', href: '#', icon: Mic },
                    ],
                },
                {
                    title: 'By Industry',
                    links: [
                        { title: 'Commerce & Retail', href: '#', icon: Banknote },
                        { title: 'Finance & Banking', href: '#', icon: Building2 },
                        { title: 'Health & Wellness', href: '#', icon: HeartPulse },
                        { title: 'Media & Entertainment', href: '#', icon: Clapperboard },
                        { title: 'Learning & Education', href: '#', icon: BookOpen },
                        { title: 'Mobility & Travel', href: '#', icon: Plane },
                        { title: 'Software & Services', href: '#', icon: Laptop },
                    ],
                },
            ],
        },
    },
    {
        label: 'Insights',
        href: '#',
        isDropdown: true,
        dropdownContent: {
            type: 'simple',
            items: [
                { title: 'Blog', href: '#', description: 'Industry insights, expert tips, and company updates.', icon: Newspaper },
                { title: 'Events', href: '#', description: 'Upcoming conferences, workshops, and networking.', icon: Calendar },
                { title: 'Case Studies', href: '#', description: 'Real client success stories and proven results.', icon: FileText },
            ],
        },
    },
    {
        label: 'Contact Us',
        href: '#',
        isDropdown: false,
    },
];