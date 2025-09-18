import { StaticImageData } from 'next/image';

export type ContentType = 'blog' | 'case-studies' | 'events';

export interface Post {
    slug: string;
    title: string;
    category: string;
    type: 'blog' | 'case-studies' | 'events'; // to differentiate between post types
    author: string;
    publishedDate: string; // CRITICAL: This must be a string for serialization
    readingTime: number;
    summary: string;
    featureImage: string | StaticImageData;// image to display on the card
    coverImage: string | StaticImageData; // image to display at the top of the blog post
    content?: React.ReactNode;
}

// The shape for an Event
export interface Event {
    slug: string;
    title: string;
    date: string; // CRITICAL: This must be a string for serialization
    endDate?: string; // OPTIONAL: Some events has start date and end date
    formatAndLocation: string; // A combined string for display
    location?: string; // OPTIONAL: Some events do not have location listed
    summary: string;
    coverImage: string | StaticImageData;
    isPast?: boolean; // This is calculated on the server, not passed to client
    content?: React.ReactNode;
}