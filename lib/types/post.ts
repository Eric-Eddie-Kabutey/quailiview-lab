import { StaticImageData } from 'next/image';

// This is the shape for a single Blog Post or Case Study
export interface Post {
    slug: string;
    title: string;
    category: string;
    author: string;
    publishedDate: string; // for filtering and sorting
    readingTime: number; // in minutes
    summary: string; // A short excerpt for preview cards
    coverImage: string | StaticImageData;
    content: React.ReactNode; // This will hold the rendered MDX or HTML content
    
}

export interface Event {
    slug: string;
    title: string;
    date: string;
    format?: string;
    location?: string; // Optional for virtual events
    summary: string;
    coverImage: string | StaticImageData;
    isPast: boolean;
    content?: React.ReactNode; // for now even data is not provided
}