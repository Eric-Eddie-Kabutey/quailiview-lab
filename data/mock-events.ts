import { Event } from '@/types';
import { format, isSameMonth, isSameYear, startOfToday, isBefore } from 'date-fns';

// image imports
import eventImg1 from '../public/assets/images/event/global-software-testing-summit-2025.png';
import eventImg2 from '../public/assets/images/event/global-software-testing-summit-2025.png';
import eventImg3 from '../public/assets/images/event/transforming-testing-in-2025.png';

type RawEventData = {
    slug: string;
    title: string;
    date: string; // e.g., '2025-03-10'
    endDate?: string; // Optional end date
    format: string;
    location?: string;
    summary: string;
    coverImage: typeof eventImg1;
};

const allEventsRaw: RawEventData[] = [
    {
        slug: 'transforming-testing-2025',
        title: 'Transforming Testing in 2025',
        date: '2025-03-10',
        format: 'Live Webinar',
        summary: 'Discover how AI is reshaping the way QA teams work — from predictive defect detection to automated test generation.',
        coverImage: eventImg1,
    },
    {
        slug: 'global-software-testing-summit-2025',
        title: 'Global Software Testing Summit 2025',
        date: '2025-04-21',
        endDate: '2025-04-23', // This is a multi-day event
        format: 'Conference',
        location: 'San Francisco, CA',
        summary: 'Join QA leaders, AI innovators, and software engineers for three days of talks, workshops, and networking.',
        coverImage: eventImg2,
    },
    {
        slug: 'past-event-example',
        title: 'Past Event Example',
        date: '2023-10-15',
        format: 'Conference',
        location: 'Virtual',
        summary: 'This is an example of an event that has already occurred.',
        coverImage: eventImg3,
    },
    {
        slug: 'feature-event-example',
        title: 'Feature Event Example',
        date: '2025-10-15',
        format: 'Conference',
        location: 'Virtual',
        summary: 'This is an example of a feature event that has already occurred.',
        coverImage: eventImg3,
    },
];


function formatEventDate(startDateStr: string, endDateStr?: string): string {
    const startDate = new Date(startDateStr);

    if (!endDateStr) {
        // Single day event
        return `Date: ${format(startDate, 'MMMM d, yyyy')}`;
    }

    const endDate = new Date(endDateStr);

    if (isSameYear(startDate, endDate) && isSameMonth(startDate, endDate)) {
        // Multi-day event within the same month (e.g., April 21-23, 2025)
        return `Date: ${format(startDate, 'MMMM d')}-${format(endDate, 'd, yyyy')}`;
    } else {
        // Multi-day event spanning different months or years (e.g., Dec 30, 2025 - Jan 2, 2026)
        return `Date: ${format(startDate, 'MMM d, yyyy')} - ${format(endDate, 'MMM d, yyyy')}`;
    }
}

/**
 * This function runs on the SERVER.
 * It filters for upcoming events (handling end dates) and formats the data
 * into the final `Event` shape for serialization.
 */
export const getUpcomingEvents = (): Event[] => {
    // Get the start of the current day in the server's local timezone.
    const today = startOfToday();

    const upcomingEvents = allEventsRaw        
        .filter(event => {
            // Determine the final day of the event.
            const eventEndDate = event.endDate ? new Date(event.endDate) : new Date(event.date);            
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const isEventInThePast = isBefore(eventEndDate, startOfToday());

            // Log the decision for each event
            // console.log(`- Checking event: ${event.title}`);
            // console.log(`  End Date: ${eventEndDate.toISOString()}`);
            // console.log(`  Is it past? ${isEventInThePast}`);
            // console.log(`  Keeping it? ${!isEventInThePast}\n`);

            // An event is considered "upcoming" if its end date is NOT before the start of today.
            return !isBefore(eventEndDate, today);
        })
        // Sort upcoming events by their start date.
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        // Map the raw data to the final, serializable `Event` type.
        .map((event): Event => ({
            slug: event.slug,
            title: event.title,
            summary: event.summary,
            coverImage: event.coverImage,
            date: formatEventDate(event.date, event.endDate),
            formatAndLocation: event.location ? `Location: ${event.location}` : `Format: ${event.format}`,
            endDate: event.endDate,
            location: event.location,
        }));

    return upcomingEvents;
};
