import CTA from "@/components/home/cta";
import ByCapacityHero from "@/components/solution/by-capacity/hero";
import ServiceOfferings from "@/components/solution/by-capacity/services";

export default function ByCapacityPage() {
    return (<>
        {/* hero */}
        <ByCapacityHero />

        {/* services */}
        <ServiceOfferings />

        {/* cta */}
        <CTA />
    </>)
}