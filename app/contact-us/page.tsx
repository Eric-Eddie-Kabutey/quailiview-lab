import ContactUs from "@/components/contact/contact-us";
import CTA from "@/components/home/cta";

export default function ContactUsPage() {
    return (<>
        {/* contact info and form */}
        <ContactUs />
        
        {/* cta - reusable */}
        <CTA />
    </>)
}