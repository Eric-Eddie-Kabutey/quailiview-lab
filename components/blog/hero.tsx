import HeroCarousel from '../shared/hero-carousel';
import { getLatestPosts } from '@/lib/content';
import BlogHeroCard from '@/components/blog/blog-hero-card';
import { Post } from '@/types';

export default function BlogHero() {
  const latestPosts = getLatestPosts();

  return (
    <HeroCarousel<Post>
      eyebrow="OUR BLOG"
      title={<>Expert perspectives on software testing, AI assurance, and industry trends.</>}
      subtitle="Stay ahead of the curve with practical tips, thought leadership, and in-depth guides from our team of QA experts. Whether you’re a developer, tester, or product leader, our articles are designed to help you build better, faster, and more secure software."
      carouselTitle="Latest Blogs"
      items={latestPosts}
      renderCard={(post) => <BlogHeroCard post={post} />}
    />
  );
}