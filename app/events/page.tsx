import EventsHero from "@/components/event/event-hero";
import CTA from "@/components/event/cta";

export default function EventPage() {
    return (<>
        {/* hero showing featured event */}
        <EventsHero />

        {/* Cta - reusable */}
        <CTA />
    </>)
}