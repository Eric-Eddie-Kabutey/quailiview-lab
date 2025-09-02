import {
	Info,
	Briefcase,
	FileText,
	Newspaper,
	Calendar,
	GraduationCap,
	Cog,
	MonitorSmartphone,
	GanttChartSquare,
	ShieldCheck,
	Server,
	Mic,
	Banknote,
	Building2,
	HeartPulse,
	Clapperboard,
	BookOpen,
	Plane,
	Laptop,
	Users,
	Rocket,
} from 'lucide-react'
import { NavItem } from '../types/nav'

export const navigationData: NavItem[] = [
	{
		label: 'Company',
		href: '#',
		isDropdown: true,
		dropdownContent: {
			type: 'simple',
			items: [
				{
					title: 'About Us',
					href: '/about-us',
					description:
						'Innovative solutions, exceptional value, industry expertise.',
					icon: Info,
				},
				{
					title: 'Management',
					href: '/management',
					description: 'Experienced leaders driving growth and innovation.',
					icon: Users,
				},
				{
					title: 'Join Us',
					href: '/join-us',
					description: 'Great careers, competitive benefits, dynamic team.',
					icon: Rocket,
				},
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
                    href: '/by-capacity',
					links: [
						{
							title: 'Functional Testing',
							href: '/by-capacity#functional-testing',
							icon: Cog,
						},
						{
							title: 'Performance Testing',
							href: '/by-capacity#performance-testing',
							icon: GanttChartSquare,
						},
						{
							title: 'AI & Emerge Tech Assurance',
							href: '/by-capacity#ai-emerge-tech-assurance',
							icon: Briefcase,
						},
						{
							title: 'Security & Compliance',
							href: '/by-capacity#security-compliance',
							icon: ShieldCheck,
						},
					],
				},
				{
                    title: 'By Technology',
                    href: '/by-technology',
					links: [
						{
							title: 'Mobile App Testing',
							href: '/by-technology#mobile-app-testing',
							icon: MonitorSmartphone,
						},
						{
							title: 'Web Testing',
							href: '/by-technology#web-testing',
							icon: Laptop,
						},
						{
							title: 'Location Testing',
							href: '/by-technology#location-testing',
							icon: Server,
						},
						{
							title: 'Stream Testing',
							href: '/by-technology#stream-testing',
							icon: Clapperboard,
						},
						{
							title: 'Device Testing',
							href: '/by-technology#device-testing',
							icon: MonitorSmartphone,
						},
						{
							title: 'Voice Testing',
							href: '/by-technology#voice-testing',
							icon: Mic,
						},
					],
				},
				{
                    title: 'By Industry',
                    href: '/by-industry',
					links: [
						{
							title: 'Commerce & Retail',
							href: '/by-industry#commerce-retail',
							icon: Banknote,
						},
						{
							title: 'Finance & Banking',
							href: '/by-industry#finance-banking',
							icon: Building2,
						},
						{
							title: 'Health & Wellness',
							href: '/by-industry#health-wellness',
							icon: HeartPulse,
						},
						{
							title: 'Media & Entertainment',
							href: '/by-industry#media-entertainment',
							icon: Clapperboard,
						},
						{
							title: 'Learning & Education',
							href: '/by-industry#learning-education',
							icon: BookOpen,
						},
						{
							title: 'Mobility & Travel',
							href: '/by-industry#mobility-travel',
							icon: Plane,
						},
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
				{
					title: 'Blog',
					href: '#',
					description: 'Industry insights, expert tips, and company updates.',
					icon: Newspaper,
				},
				{
					title: 'Events',
					href: '#',
					description: 'Upcoming conferences, workshops, and networking.',
					icon: Calendar,
				},
				{
					title: 'Case Studies',
					href: '#',
					description: 'Real client success stories and proven results.',
					icon: FileText,
				},
			],
		},
	},
	{
		label: 'Contact Us',
		href: '#',
		isDropdown: false,
	},
]
