import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'dotted-line-y': 'radial-gradient(circle at center, #e5e7eb 1px, transparent 1.5px)',
            },
            colors: {
                'brand-teal': {
                    DEFAULT: '#0f4c5c',
                    dark: '#0c3b47',
                },
            }
        },
    },
    plugins: [
        typography,
    ],
};
export default config;