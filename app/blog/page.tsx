import BlogSection from "@/components/blog/blog";
import CTA from "@/components/home/cta";

export default function BlogPage() {
    return (<>
        {/* hero showing featured event */}
        <h1>Our Blogs</h1>

        {/* blog listing */}
        <BlogSection /> 

        {/* Cta - reusable */}
        <CTA />
    </>)
}