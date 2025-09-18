import Image from 'next/image';
import { Post, ContentType } from '@/types';
import { getRelatedContent } from '@/lib/content';
import { format } from 'date-fns';
import PostCard from '../shared/post-card';
import BackgroundEffect from '../shared/background-effect';

interface PostLayoutProps {
  post: Post;
  content: React.ReactNode;
  contentType: ContentType; // We need to know if this is a 'blog' or 'case-study'
}


export default async function PostLayout({ post, content, contentType }: PostLayoutProps) {  
   // Fetch related content directly within the layout component
  const relatedPosts = getRelatedContent<Post>({
    contentType,
    category: post.category,
    currentSlug: post.slug,
    limit: 3,
  });
  
  return (
    <div className="relative bg-white text-black">
        {/* ... dotted background ... */}
        <BackgroundEffect lineColor='gray-200' />
      <div className="relative z-20 mx-auto lg:max-w-5xl xl:max-w-7xl">
        <article className="mx-auto max-w-4xl px-4  py-6 sm:py-8">
          <header className="text-start flex flex-col gap-4 mb-6">
            {/* ... header content ... */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{post.title}</h1>
            <p className='text-sm text-gray-500 tracking-wide'>Category: { post.category }</p>
            <div className="flex items-center justify-start gap-x-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{format(new Date(post.publishedDate), 'MMMM d, yyyy')}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{post.readingTime} min read</span>
            </div>
          </header>

          {/* The sample post shows post with only inner picture */}
          {post.coverImage && (<div className="relative my-12 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src={post.coverImage} alt={`Cover image for ${post.title}`} fill className="object-cover" priority />
          </div>)}

          {/* The rendered MDX content will be passed in here */}
          <div className="prose">{content}</div>

        </article>
        
      {/* Conditionally render the "Related Posts" section */}
      {relatedPosts.length > 0 && (
          <div className="mx-auto max-w-4xl py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
              {contentType === 'blog' ? 'Other Blogs' : 'Related Case Studies'}
            </h2>
            {/* 4. Use the existing PostCard component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>      
      )}
      </div>

    </div>
  );
}