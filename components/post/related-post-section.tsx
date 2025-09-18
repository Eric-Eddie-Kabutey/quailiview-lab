import { getRelatedContent } from '@/lib/content';
import { ContentType, Post } from '@/types';
import RelatedPostCard from './related-post-card';

interface RelatedPostsSectionProps {
  contentType: ContentType;
  category: string;
  currentSlug: string;
}

export default function RelatedPostsSection({ contentType, category, currentSlug }: RelatedPostsSectionProps) {
  // Fetch the related posts on the server
  const relatedPosts = getRelatedContent<Post>({ contentType, category, currentSlug, limit: 3 });

  // If there are no related posts, don't render the section
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
          {contentType === 'blog' ? 'Other Blogs' : 'Other Case Studies'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <RelatedPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}