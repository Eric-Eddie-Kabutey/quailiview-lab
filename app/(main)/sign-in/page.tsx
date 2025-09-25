import Image from 'next/image';
import Link from 'next/link';
import { SignInForm } from '@/components/main/sign-in/sign-in-form'; // We will create this next

// import globeImage from '/public/assets/images/globe-network.svg';

export default function SignInPage() {
  return (
    <div className="relative min-h-screen w-full bg-gray-300 py-8">
      {/* Consistent dotted background */}
      <div className="absolute inset-0 flex justify-around opacity-75 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-px bg-dotted-line-y" style={{ backgroundSize: '1px 8px' }} />
        ))}
      </div>
      
      <div className="container bg-white rounded-lg 2xl:h-[80vh] mx-auto lg:max-w-5xl xl:max-w-6xl relative grid n grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Sign-In Form */}
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <SignInForm />
          </div>
        </div>

        {/* Right Column: Promotional Panel */}
           <div className="hidden lg:flex relative items-center justify-center rounded-lg  p-8 overflow-hidden">
          
          {/* Layer 1: Background Image (z-10) */}
          <div className="absolute inset-0 z-10">
            <Image
              src='assets/images/globe-network.svg'
              alt="Globe with network connections"
              fill // CRITICAL: Makes the image fill the container
              className="object-cover opacity-100" 
            />
          </div>

          {/* Layer 2: Content (z-20, on top of the image) */}
          <div className="relative z-20 flex flex-col items-center justify-center mt-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Explore, learn and network with Qualiview events
            </h2>
            <p className="mt-4 max-w-md text-gray-600">
              Connect with industry experts and thought-leaders at our events, whether online or in a city near you!
            </p>
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-block px-8 py-3 border border-[#03444A] rounded-md text-[#03444A] bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:text-[#02444A] transition-all duration-300"
              >
                Explore all events
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}