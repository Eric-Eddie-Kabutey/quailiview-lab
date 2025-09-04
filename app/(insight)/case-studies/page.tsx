import CaseStudiesHero from "@/components/case-studies/hero";
import CTA from "@/components/home/cta";
import PaginatedPostGrid from "@/components/PaginatedPostGrid";
import { mockCaseStudies } from "@/data/mock-case-studies";

export default function BlogPage() {
    return (<>
        {/* hero showing featured event */}
        <CaseStudiesHero />

        {/* blog listing */}                
        <PaginatedPostGrid 
          title="Case Studies" 
          initialPosts={mockCaseStudies} 
          postType="case-study"
        />

        {/* Cta - reusable */}
        <CTA />
    </>)
}