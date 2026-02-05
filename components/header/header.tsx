'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from '@/components/module/framer-motion'
import { Menu } from 'lucide-react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

import { navigationData } from '@/lib/data/nav'
import { SimpleDropdownItem, ServiceColumn } from '@/lib/types/nav'
import Image from 'next/image'
import { NavTriggerUnderline } from '../ui/nav-trigger-underline'

// Reusable component for dropdown items
const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground hover:bg-gray-200 focus:bg-accent focus:text-accent-foreground ${className}`}
					{...props}>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'

export default function Header() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<header className='sticky top-0 z-50 w-full border-b md:border-b-0 bg-[#FFFFFF] shadow'>
			{/* backdrop-blur supports-[backdrop-filter]:bg-background/60 */}
            <div className='container mx-auto flex items-center justify-between h-16 lg:max-w-5xl xl:max-w-6xl'>
                {/* site logo */}
				<div className='mr-4 hidden md:flex'>
					<Link href='/' className='mr-6 flex items-center space-x-2'>                        
                        <Image src="/assets/logo/logo1.svg" alt='Site logo' width={140} height={80} />
					</Link>
                </div>
                
                {/* desktop navigation */}				
                    <nav className='hidden lg:flex'>
						<DesktopNav setIsOpen={setIsOpen} />
					</nav>

				{/* Mobile Menu */}
<div className='flex flex-1 items-center justify-between space-x-2 lg:hidden px-6 bg-white dark:bg-white'>
    <Link href='/' className='font-bold'>
        <Image
            src='/assets/logo/logo1.svg'
            alt='Site Logo'
            width={140}
            height={32}
        />
    </Link>
    
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
            <button 
                type="button"
                className='inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-transparent focus:outline-none'
                aria-label="Open Menu"
            >
                {/* strokeWidth={3} makes it very bold; h-7 w-7 makes it larger */}
                <Menu className='h-7 w-7' strokeWidth={3} />
                <span className='sr-only'>Toggle Menu</span>
            </button>
        </SheetTrigger>
        
        <SheetContent side='right' className='pr-0 flex flex-col p-6 bg-white'>
            <Link
                href='/'
                className='font-bold text-lg mb-4'
                onClick={() => setIsOpen(false)}>
                <Image
                    src='/assets/logo/logo1.svg'
                    alt='Site Logo'
                    width={140}
                    height={32}
                />
            </Link>
            
            <MobileNav setIsOpen={setIsOpen} />
            
            <div className='mt-auto pt-6'>
                <div className='pr-6'>
                    <Link
                        href='/app'
                        onClick={() => setIsOpen(false)}
                        className='block w-full text-center py-2 bg-[#03444A] text-white rounded-md font-medium'>
                        Visit our App
                    </Link>
                </div>
            </div>
        </SheetContent>
    </Sheet>
</div>
                
				
					{/* action buttons */}
					<div className='hidden lg:flex items-center justify-end'>
	<Link
		href='/app'
		className='py-2 px-6 bg-[#03444A] text-white rounded-md text-sm font-medium transition-colors hover:bg-[#023338]'>
		Visit our App
	</Link>
</div>
			</div>
		</header>
	)
}

// Desktop Navigation Component
const DesktopNav = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
	<NavigationMenu>
		<NavigationMenuList>
			{navigationData.map((navItem) =>
				navItem.isDropdown ? (
					<NavigationMenuItem key={navItem.label}>
						<NavTriggerUnderline>{navItem.label}</NavTriggerUnderline>
						<NavigationMenuContent className='bg-[#F6FAFC] text-[#282930]'>
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}>
								{navItem.dropdownContent?.type === 'simple' && (
									<ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px]'>
										{navItem.dropdownContent.items?.map(
											(item: SimpleDropdownItem) => (
												<ListItem
													key={item.title}
													href={item.href}
													title={item.title}>
													<div className='flex items-start gap-2'>
														<item.icon className='h-4 w-4 mt-0.5 text-muted-foreground' />
														<span>{item.description}</span>
													</div>
												</ListItem>
											)
										)}
									</ul>
								)}
								{navItem.dropdownContent?.type === 'services' && (
									<div className='grid grid-cols-3 gap-6 p-6 md:w-[600px] lg:w-[800px]'>
										{navItem.dropdownContent.columns?.map(
											(column: ServiceColumn) => (
												<div
													key={column.title}
													className='flex flex-col space-y-2'>
													<Link href={column.href ?? ""} className='font-semibold text-sm mb-2 hover:underline' onClick={() => setIsOpen(false)}>
														{column.title}
													</Link>
													{column.links.map((link) => (
														<Link
															key={link.title}
															href={link.href}
															onClick={() => setIsOpen(false)}
															className='group flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:bg-gray-200'>
															<link.icon className='h-4 w-4 text-muted-foreground' />
															<span className='text-sm'>{link.title}</span>
														</Link>
													))}
												</div>
											)
										)}
									</div>
								)}
							</motion.div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				) : (
					<NavigationMenuItem key={navItem.label}>
						<NavigationMenuLink asChild>
							<Link
								href={navItem.href}
								className={navigationMenuTriggerStyle()}
							>
								{navItem.label}
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				)
			)}
		</NavigationMenuList>
	</NavigationMenu>
)

// Mobile Navigation Component
const MobileNav = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => (
	<Accordion type='multiple' className='w-full'>
		{navigationData.map((navItem, index) =>
			navItem.isDropdown ? (
				<AccordionItem value={`item-${index}`} key={navItem.label}>
					<AccordionTrigger className='text-gray-900 text-base font-semibold'>
						{navItem.label}
					</AccordionTrigger>
					<AccordionContent>
						{navItem.dropdownContent?.type === 'simple' && (
							<div className='flex flex-col space-y-2 pl-4'>
								{navItem.dropdownContent.items?.map((item) => (
									<Link
										key={item.title}
										href={item.href}
										className='flex items-center gap-2 py-2 text-base text-gray-900'
										onClick={() => setIsOpen(false)}>
										<item.icon className='h-4 w-4' /> {item.title}
									</Link>
								))}
							</div>
						)}
						{navItem.dropdownContent?.type === 'services' && (
							<Accordion type='multiple' className='w-full pl-4'>
								{navItem.dropdownContent.columns?.map((column, colIndex) => (
									<AccordionItem
										value={`sub-item-${colIndex}`}
										key={column.title}>
										<AccordionTrigger className='text-sm font-semibold'>
											<Link href={column.href ?? ""} className='font-semibold text-gray-900 text-sm' onClick={() => setIsOpen(false)}>
														{column.title}
													</Link>											
										</AccordionTrigger>
										<AccordionContent>
											{/* Scrollable Container */}
											<div className='flex flex-col space-y-2 pl-4 max-h-[250px] overflow-y-auto'>
												{column.links.map((link) => (
													<Link
														key={link.title}
														href={link.href}
														className='flex items-center gap-2 py-2'
														onClick={() => setIsOpen(false)}>
														<link.icon className='h-4 w-4' /> {link.title}
													</Link>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						)}
					</AccordionContent>
				</AccordionItem>
			) : (
				<Link
					key={navItem.label}
					href={navItem.href}
					className='flex w-full items-center py-2 text-gray-900 text-base font-semibold'
					onClick={() => setIsOpen(false)}>
					{navItem.label}
				</Link>
			)
		)}
	</Accordion>
)
