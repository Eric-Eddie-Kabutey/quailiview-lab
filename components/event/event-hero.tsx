
import ContentCarouselHero from '../shared/contentCarouselHero';
import { getUpcomingEvents } from '@/data/event-mock';
import EventHeroCard from '@/components/event/event-hero-card';

export default function EventsHero() {
    const upcomingEvents = getUpcomingEvents(); 
    console.log("Upcoming event", upcomingEvents);
    

  return (
    <ContentCarouselHero
      eyebrow="EVENTS"
      title={<>Connect, learn, and grow with the global QA community.</>}
      subtitle="From live webinars to industry conferences..."
      carouselTitle="Upcoming"
    >      
      {upcomingEvents.map((event) => (
        <div key={event.slug} className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 px-4 sm:px-6">
          <EventHeroCard event={event} />
        </div>
      ))}
    </ContentCarouselHero>
  );
}