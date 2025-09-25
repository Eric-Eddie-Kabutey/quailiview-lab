import AboutHero from "@/components/company/about-us/about-hero";
import MissionVision from "@/components/company/about-us/mission-vision";
import CTA from "@/components/home/cta";

export default function AboutUsPage() {
    return (<>
        {/* hero */}
        <AboutHero />
        
        {/* our mission & vision */}
        <MissionVision />

        {/* cta - reusable */}
        <CTA />
    </>)
 }
