import HeroCarousel from '../shared/hero-carousel';
import { getUpcomingEvents } from '@/data/mock-events';
import EventHeroCard from '@/components/event/event-hero-card';
import { Event } from '@/types/index';

export default function EventsHero() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <HeroCarousel<Event>
      eyebrow="EVENTS"
      title={<>Connect, learn, and grow with the global QA community.</>}
      subtitle="From live webinars to industry conferences, Qualiview Lab brings together testers, developers, and product leaders to share insights, best practices, and the latest in AI-powered quality assurance."
      carouselTitle="Upcoming"
      items={upcomingEvents}
      renderCard={(event) => <EventHeroCard event={event} />}
    />
  );
}