import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/lib/types/post';

export default function PostLayout({ post }: { post: Post }) {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
        {/* Consistent dotted background */}
        <div className="absolute inset-0 flex justify-around opacity-75 pointer-events-none -z-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
          ))}
        </div>

        <article className="">
          {/* Post Header */}
          <header className="flex flex-col gap-2">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-base font-semibold leading-7 text-gray-700">
              Category: <Link href="#" className="hover:underline">{post.category}</Link>
            </p>
            <div className="flex flex-col md:flex-row md:items-center  gap-x-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-gray-600" />
              <div>
                <span>{post.publishedDate}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <div className="relative my-12 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.coverImage}
              alt={`Cover image for ${post.title}`}
              fill
              className="object-cover"
              placeholder="blur"
              priority
            />
          </div>

          {/* Post Content */}
          <div
            className="
              prose prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 
              prose-p:text-gray-700
              prose-a:text-brand-teal prose-a:no-underline hover:prose-a:underline
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-brand-teal prose-blockquote:pl-4 
              prose-blockquote:italic prose-blockquote:text-gray-600
            "
          >
            {post.content}
          </div>
        </article>
      </div>
    </div>
  );
}