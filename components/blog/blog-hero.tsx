import ContentCarouselHero from '@/components/shared/contentCarouselHero';
import { getLatestPosts } from '@/data/mock-posts';
import BlogHeroCard from '@/components/blog/blog-hero-card';

export default function BlogHero() {
  const latestPosts = getLatestPosts(); 

  return (
    <ContentCarouselHero
      eyebrow="OUR BLOG"
      title={<>Expert perspectives on software testing, AI assurance, and industry trends.</>}
      subtitle="Stay ahead of the curve with practical tips, thought leadership, and in-depth guides from our team of QA experts. Whether you’re a developer, tester, or product leader, our articles are designed to help you build better, faster, and more secure software."
      carouselTitle="Latest Blogs"
    >
      {/* We render the cards here ON THE SERVER and pass them as children */}
      {latestPosts.map((post) => (
        <div key={post.slug} className="flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 px-4 sm:px-6">
          <BlogHeroCard post={post} />
        </div>
      ))}
    </ContentCarouselHero>
  );
}