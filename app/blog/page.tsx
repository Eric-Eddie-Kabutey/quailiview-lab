import BlogSection from "@/components/blog/blog-hero";
import CTA from "@/components/home/cta";
import PaginatedPostGrid from "@/components/PaginatedPostGrid";
import { getAllContent } from "@/lib/content";
import { Post } from "@/types/index";

export default function BlogPage() {
    const getAllPost = getAllContent<Post>('blog')
    return (<>
        {/* hero showing featured event */}
        <BlogSection /> 

        {/* blog listing */}
         <PaginatedPostGrid 
          title="All Blog Posts" 
          initialPosts={getAllPost}           
        />

        {/* Cta - reusable */}
        <CTA />
    </>)
}