import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/types/index';
import { format } from 'date-fns';

export default function EventHeroCard({ event }: { event: Event }) {
    console.log("[Event]", event);
    
  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden">
      <div className="relative aspect-[16/10] w-full">
        <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow text-white">
        <div className="flex justify-between text-xs text-white/70 font-medium uppercase">
          <span>Date: {format(event.date, 'MMMM d, yyyy')}</span>
          <span>{event.formatAndLocation ? `Location: ${event.formatAndLocation}` : `Format: ${event.formatAndLocation}`}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-tight">{event.title}</h3>
        <p className="mt-2 text-sm text-white/80 line-clamp-3 flex-grow">{event.summary}</p>
        <div className="mt-4">
          <Link href={`/events/${event.slug}`} className="inline-block px-5 py-2 text-sm font-semibold bg-white/10 rounded-md hover:bg-white/20 transition-colors">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}