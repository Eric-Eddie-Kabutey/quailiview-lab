import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
        <header className='sticky top-0 z-50 w-full border-b md:border-b-0 bg-[#FFFFFF] shadow'>
            <div className='container mx-auto h-16 lg:max-w-5xl xl:max-w-6xl flex items-center justify-center'>
                <Link href='/'>
                    <Image
                        src='/assets/logo/logo1.svg'
                        alt='Site Logo'
                        width={140}
                        height={32}
                    />
                </Link>
            </div>
		</header>
	)
} 
