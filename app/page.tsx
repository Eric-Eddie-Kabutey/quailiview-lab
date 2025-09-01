import CTA from "@/components/home/cta";
import FAQ from "@/components/home/faq";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import Solutions from "@/components/home/solution";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonial";
import TrustedBy from "@/components/home/trusted-by";

export default function Home() {
  return (<>
    <Hero />

    {/* Trusted by companies */}
    <TrustedBy />

    {/* Solutions */}
    <Solutions />

    {/* stats */}
    <Stats />

    {/* how it works */}
    <HowItWorks />

    {/* testimonial */}
    {/* <Testimonials /> */}

    {/* Faq */}
    <FAQ />

    {/* Cta */}
    <CTA />
  </>);
}
