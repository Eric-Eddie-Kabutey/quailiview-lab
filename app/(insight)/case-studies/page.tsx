import CaseStudiesHero from "@/components/case-studies/hero";
import CTA from "@/components/home/cta";
import PaginatedPostGrid from "@/components/PaginatedPostGrid";
import { mockCaseStudies } from "@/data/mock-case-studies";
import { getAllContent } from "@/lib/content";
import { Post } from "@/types";

export default function CaseStudiesPage() {
  const getAllPost = getAllContent<Post>('case-studies')
    return (<>
        {/* hero showing featured event */}
        <CaseStudiesHero />

        {/* blog listing */}                
        <PaginatedPostGrid 
          title="Case Studies" 
          initialPosts={getAllPost}           
        />

        {/* Cta - reusable */}
        <CTA />
    </>)
}