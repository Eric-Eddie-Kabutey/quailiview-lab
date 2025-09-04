import BlogSection from "@/components/blog/blog-hero";
import CTA from "@/components/home/cta";
import PaginatedPostGrid from "@/components/PaginatedPostGrid";
import { mockPosts } from "@/data/mock-posts";

export default function BlogPage() {
    return (<>
        {/* hero showing featured event */}
        <BlogSection /> 

        {/* blog listing */}
         <PaginatedPostGrid 
          title="All Blog Posts" 
          initialPosts={mockPosts} 
          postType="blog"
        />

        {/* Cta - reusable */}
        <CTA />
    </>)
}