import CTA from "@/components/home/cta";
import { HeroSection } from "@/components/solution/by-tech/hero";
import TestingServiceSection from "@/components/solution/by-tech/services";
import { TESTING_SERVICES } from "@/components/solution/by-tech/data";

export default function ByTechnologyPage() {
    return (
        <div className="bg-white selection:bg-teal-100">
            {/* The main hero with the image collage and primary text */}
            <HeroSection />

            {/* Header Section for Service List */}
            <header className="pt-32 pb-12 text-center mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
                <span className="text-teal-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                    OUR TECHNOLOGY
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15] tracking-tight">
                    Our Technology-Specific Testing Services
                </h1>
            </header>

            {/* Services List - Standardized container to match page headers */}
            <main className="mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
                {TESTING_SERVICES.map((service, index) => (
                    <TestingServiceSection 
                        key={service.id} 
                        service={service} 
                        index={index} 
                    />
                ))}
            </main>

            <CTA />
        </div>
    );
}