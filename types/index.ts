import { StaticImageData } from 'next/image';

export interface Post {
    slug: string;
    title: string;
    category: string;
    author: string;
    publishedDate: string; // CRITICAL: This must be a string for serialization
    readingTime: number;
    summary: string;
    coverImage: string | StaticImageData;
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