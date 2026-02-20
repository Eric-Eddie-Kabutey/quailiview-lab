import CTA from "@/components/home/cta";
import { IndustryHeroSection } from "@/components/solution/by-industry/hero";
import IndustryServiceSection from "@/components/solution/by-industry/services";
import { INDUSTRY_SERVICES } from "@/components/solution/by-industry/data";

export default function ByIndustryPage() {
    return (
        <div className="bg-white selection:bg-teal-100">
            {/* The main hero with industry-specific messaging */}
            <IndustryHeroSection />

            {/* Services Section with themed background and grid lines */}
            <div className="relative bg-[#F0F9FA] overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.4]" 
                     style={{ 
                       backgroundImage: `repeating-linear-gradient(90deg, #E2E8F0, #E2E8F0 1px, transparent 1px, transparent 120px)`,
                     }}>
                </div>

                <div className="relative z-10">
                    {/* Header Section for Industry Service List */}
                    <header className="pt-32 pb-12 text-center mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0">
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                            OUR INDUSTRIES
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15] tracking-tight">
                            Our Industry-Specific Testing Services
                        </h1>
                    </header>

                    {/* Services List - Standardized container to match page headers */}
                    <main className="mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0 pb-24">
                        {INDUSTRY_SERVICES.map((service, index) => (
                            <IndustryServiceSection 
                                key={service.id} 
                                service={service} 
                                index={index} 
                            />
                        ))}
                    </main>
                </div>
            </div>

            <CTA />
        </div>
    );
}