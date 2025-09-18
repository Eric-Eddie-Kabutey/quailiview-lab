import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types';
import { format } from 'date-fns';

// This card is specifically styled for the dark "Related Posts" section
export default function RelatedPostCard({ post }: { post: Post }) {
    // Dynamically construct the post URL based on its type and slug
  const postUrl = `/${post.type}/${post.slug}`;

  return (
    <Link href={postUrl} className="group block h-full">
      <div className="flex flex-col h-full bg-brand-dark rounded-xl border border-white/10 shadow-lg overflow-hidden hover:border-white/20 transition-all duration-300">
        
        {/* Image and Category Tag */}
        <div className="relative">
          <div className="aspect-[16/10] w-full">
            <Image
              src={post.featureImage || '/assets/images/default-cover.png'}
              alt={`Cover image for ${post.title}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 rounded-md px-2 py-1 text-xs font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6 flex flex-col flex-grow text-white">
          <p className="text-sm text-white/70">{format(new Date(post.publishedDate), 'MMM dd, yyyy')}</p>
          <h3 className="mt-2 text-lg font-semibold leading-tight group-hover:text-brand-accent transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-3 flex-grow">
            {post.summary}
          </p>
          <div className="mt-4">
            <span className="relative text-brand-accent font-semibold text-sm">
              Read More
              <span className="absolute bottom-[-2px] left-0 h-0.5 bg-brand-accent w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}