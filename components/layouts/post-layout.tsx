import Image from 'next/image';
import { Post } from '@/types';
import { format } from 'date-fns';

export default function PostLayout({ post, children }: { post: Post, children: React.ReactNode }) {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        {/* ... dotted background ... */}
        <article className="mx-auto max-w-3xl">
          <header className="text-center">
            {/* ... header content ... */}
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center justify-center gap-x-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{format(new Date(post.publishedDate), 'MMMM d, yyyy')}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          <div className="relative my-12 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src={post.coverImage} alt={`Cover image for ${post.title}`} fill className="object-cover" placeholder="blur" priority />
          </div>

          {/* The rendered MDX content will be passed in here */}
          <div>{children}</div>

        </article>
      </div>
    </div>
  );
}