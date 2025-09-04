import CaseStudiesSection from "@/components/case-studies/case-studies";
import CaseStudiesHero from "@/components/case-studies/hero";
import CTA from "@/components/home/cta";

export default function BlogPage() {
    return (<>
        {/* hero showing featured event */}
        <CaseStudiesHero />

        {/* blog listing */}        
        <CaseStudiesSection />

        {/* Cta - reusable */}
        <CTA />
    </>)
}