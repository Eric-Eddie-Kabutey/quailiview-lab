import Link from 'next/link';
import { SignUpForm } from '@/components/auth/sign-up-form';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import BackgroundEffect from '@/components/shared/background-effect';



const includedFeatures = [
  'Instant Access to Real Devices',
  '30 mins each of interactive browser and mobile app testing',
  '100 mins of automated browser testing',
  '100 mins of automated mobile app testing',
  '5000 screenshots/month for visual testing with Percy',
  'Testing on internal development environments',
];

export default function SignUpPage() {
  return (
      <div className="relative bg-[#E4E5E9] min-h-screen py-8">
          <BackgroundEffect lineColor='gray-400' />
          <div className="container mx-auto lg:max-w-5xl xl:max-w-6xl bg-white mt-6 grid grid-cols-1 lg:grid-cols-2 rounded-lg">
                {/* Left Column: Sign-Up Form */}
                <div className="flex items-center justify-center py-12 px-2">
                    <div className="w-full max-w-md space-y-8">
                    <SignUpForm />
                    </div>
                </div>
              
                {/* Right Column: Promotional Panel */}
                <div className="hidden lg:flex flex-col justify-center bg-[#283c4d] text-white p-12 rounded-r-lg">
                    <div className="max-w-md">
                    <h2 className="text-2xl font-semibold">What&apos;s included</h2>
                    <ul className="mt-6 space-y-4">
                        {includedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-[15px]">
                            <CheckIcon className="h-5 w-5 mt-1 text-green-500 flex-shrink-0" />
                            <span>
                            {feature}
                            {feature.includes('Percy') && (
                                <span className="ml-2 inline-block rounded-md bg-blue-500/80 px-2 py-0.5 text-xs font-semibold">
                                New
                                </span>
                            )}
                            </span>
                        </li>
                        ))}
                    </ul>

                    <div className="mt-16">
                        <h3 className="text-lg font-semibold text-white/80">
                        Trusted by more than 50,000 customers globally
                        </h3>
                        <div className="mt-6 opacity-70">                        
                            <Image src='/assets/images/auth_logos_md_new.svg' alt='trusted logos' width={80} height={60} className='h-auto w-full' />              
                        </div>
                    </div>
                    </div>
                </div>
          </div>

    </div>
  );
}