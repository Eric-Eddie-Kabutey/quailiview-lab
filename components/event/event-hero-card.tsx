import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/types/index';

export default function EventHeroCard({ event }: { event: Event }) {    
    
  return (
    <div className="flex flex-col h-full bg-white p-2 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden">
      <div className="relative aspect-[16/10] w-full rounded-2xl">
        <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between text-xs text-black font-medium uppercase">
          <span>{event.date}</span>
          <span>{event.formatAndLocation}</span>
        </div>
        <h3 className="mt-4 text-lg text-black font-medium leading-tight">{event.title}</h3>
        <p className="mt-2 text-sm text-[#4E4F54] line-clamp-3 flex-grow">{event.summary}</p>
        <div className="mt-4">
          <Link href={`/events/${event.slug}`} className="inline-block px-5 py-2 text-sm font-semibold bg-[#03444A] rounded-md hover:bg-[#04444A] transition-colors">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}