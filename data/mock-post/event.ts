import { Event } from '@/lib/types/post';
import { isPast } from 'date-fns';

import eventImg1 from '../public/assets/images/event/transforming-testing-in-2025.png';
import eventImg2 from '/public/images/events/global-software-testing-summit-2025.png';
import eventImg3 from '/public/images/events/transforming-testing-in-2025.jpg';

const allEvents: Omit<Event, 'isPast'>[] = [
    {
        slug: 'transforming-testing-2025',
        title: 'Transforming Testing in 2025',
        date: new Date('2025-03-10T09:00:00'),
        format: 'Live Webinar',
        summary: 'Discover how AI is reshaping the way QA teams work — from predictive defect detection to automated test generation.',
        coverImage: eventImg1,
    },
    {
        slug: 'global-software-testing-summit-2025',
        title: 'Global Software Testing Summit 2025',
        date: new Date('2025-04-21T09:00:00'),
        format: 'Conference',
        location: 'San Francisco, CA',
        summary: 'Join QA leaders, AI innovators, and software engineers for three days of talks, workshops, and networking.',
        coverImage: eventImg2,
    },
    {
        slug: 'past-event-example',
        title: 'Past Event Example',
        date: new Date('2023-10-15T09:00:00'),
        format: 'Conference',
        location: 'Virtual',
        summary: 'This is an example of an event that has already occurred and should not be displayed in the "Upcoming" section.',
        coverImage: eventImg3,
    },
];

// Function to get only upcoming events
export const getUpcomingEvents = (): Event[] => {
    return allEvents
        .map(event => ({ ...event, isPast: isPast(event.date) }))
        .filter(event => !event.isPast)
        .sort((a, b) => a.date.getTime() - b.date.getTime());
};