import CurrentOpenings from "@/components/company/join-us/current-openings";
import JoinUsHero from "@/components/company/join-us/hero";
import WhyWorkWithUs from "@/components/company/join-us/why-work-with-us";
import CTA from "@/components/home/cta";

export default function JoinUsPage() {
    return (<>
        {/* hero */}
        <JoinUsHero />
        
        {/* why work with us */}
        <WhyWorkWithUs />

        {/* current openings */}
        <CurrentOpenings />

        {/* cta - reusable */}
        <CTA />
    </>)
 }
