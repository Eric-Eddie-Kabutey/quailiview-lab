import { Event } from '@/types';
import { isPast, format } from 'date-fns';

const allEventsRaw = [
    {
        slug: 'transforming-testing-2025',
        title: 'Transforming Testing in 2025',
        date: new Date('2025-03-10T09:00:00'),
        formatAndLocation: 'Live Webinar',
        summary: 'Discover how AI is reshaping the way QA teams work — from predictive defect detection to automated test generation.',
        coverImage: "/assets/images/event/global-software-testing-summit-2025.png",
    },
    {
        slug: 'global-software-testing-summit-2025',
        title: 'Global Software Testing Summit 2025',
        date: new Date('2025-04-21T09:00:00'),
        formatAndLocation: 'Conference',
        location: 'San Francisco, CA',
        summary: 'Join QA leaders, AI innovators, and software engineers for three days of talks, workshops, and networking.',
        coverImage: "/assets/images/event/global-software-testing-summit-2025.png",
    },
    {
        slug: 'past-event-example',
        title: 'Past Event Example',
        date: new Date('2023-10-15T09:00:00'),
        formatAndLocation: 'Conference',
        location: 'Virtual',
        summary: 'This is an example of an event that has already occurred and should not be displayed in the "Upcoming" section.',
        coverImage: "/assets/images/event/transforming-testing-in-2025.png",
    },
];

// This function runs on the SERVER. It filters and formats the data.
export const getUpcomingEvents = (): Event[] => {
    return allEventsRaw
        .filter(event => !isPast(event.date))
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map(event => ({
            ...event,
            // Format the date and combine location/format into a single string
            date: `Date: ${format(event.date, 'MMMM d, yyyy')}`,
            formatAndLocation: event.location ? `Location: ${event.location}` : `Format: ${event.formatAndLocation}`,
        }));
};