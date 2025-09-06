import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types/post';
import { format } from 'date-fns';

export default function BlogHeroCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col h-full bg-[#FFFFFF] p-2 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden">
      <div className="relative aspect-[16/10] w-full">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#FFFFFF] backdrop-blur-md text-black rounded-md px-2 py-1 text-xs font-semibold">{post.category}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow text-black">
        <p className="text-sm text-black/70">{format(post.publishedDate, 'MMM dd, yyyy')}</p>
        <h3 className="mt-2 text-lg font-medium leading-tight">{post.title}</h3>
        <p className="mt-2 text-sm text-black/80 line-clamp-3 flex-grow">{post.summary}</p>
        <div className="mt-4">
          <Link href={`/blog/${post.slug}`} className="inline-block px-5 py-2 text-sm text-white font-medium bg-[#03444A] rounded-md hover:[#03444A] transition-colors">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}