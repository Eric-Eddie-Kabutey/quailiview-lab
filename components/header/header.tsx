'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from '@/components/module/framer-motion'
import { ChevronDown, Menu } from 'lucide-react'

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
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
					className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
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
		<header className='sticky top-0 z-50 w-full border-b md:border-b-0 bg-[#F6FAFC] backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto flex items-center justify-between h-16 lg:max-w-5xl xl:max-w-6xl'>
                {/* site logo */}
				<div className='mr-4 hidden md:flex'>
					<Link href='/' className='mr-6 flex items-center space-x-2'>                        
                        <Image src="/assets/logo/logo-white.png" alt='Site logo' width={100} height={24} />
					</Link>
                </div>
                
                {/* desktop navigation */}				
                    <nav className='hidden lg:flex'>
						<DesktopNav />
					</nav>

				{/* Mobile Menu */}
				<div className='flex flex-1 items-center justify-between space-x-2 lg:hidden px-6'>
					<Link href='/' className='font-bold'>
						<Image
							src='/assets/logo/logo-colored.png'
							alt='Site Logo'
							width={100}
							height={24}
						/>
					</Link>
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<button className='px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'>
								<Menu className='h-6 w-6' />
								<span className='sr-only'>Toggle Menu</span>
							</button>
						</SheetTrigger>
						<SheetContent side='right' className='pr-0 flex flex-col p-6'>
							<Link
								href='/'
								className='font-bold text-lg mb-4'
								onClick={() => setIsOpen(false)}>
								<Image
									src='/assets/logo/logo-colored.png'
									alt='Site Logo'
									width={100}
									height={24}
								/>
							</Link>
							<MobileNav setIsOpen={setIsOpen} />
							<div className='mt-auto pt-6'>
								<div className='flex flex-col space-y-2'>
									<Link
										href='#'
										className='w-full text-center py-2 border rounded-md'>
										Sign In
									</Link>
									<Link
										href='#'
										className='w-full text-center py-2 bg-[#03444A] text-white rounded-md'>
										Get Started
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
                
				
					{/* action buttons */}
					<div className='hidden lg:flex items-center justify-end space-x-4'>
						<nav className='flex items-center space-x-2'>
							<Link href='#' className='py-2 px-4 border rounded-md text-sm'>
								Sign In
							</Link>
							<Link
								href='#'
								className='py-2 px-4 bg-[#03444A] text-white rounded-md text-sm'>
								Get Started
							</Link>
						</nav>
					</div>
			</div>
		</header>
	)
}

// Desktop Navigation Component
const DesktopNav = () => (
	<NavigationMenu>
		<NavigationMenuList>
			{navigationData.map((navItem) =>
				navItem.isDropdown ? (
					<NavigationMenuItem key={navItem.label}>
						<NavigationMenuTrigger>{navItem.label}</NavigationMenuTrigger>
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
													<Link href={column.href ?? ""} className='font-semibold text-sm mb-2'>
														{column.title}
													</Link>
													{column.links.map((link) => (
														<Link
															key={link.title}
															href={link.href}
															className='group flex items-center gap-2 p-2 rounded-md hover:bg-accent'>
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
						<Link href={navItem.href} legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								{navItem.label}
							</NavigationMenuLink>
						</Link>
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
										className='flex items-center gap-2 py-2 text-base'
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
											<Link href={column.href ?? ""} className='font-semibold text-sm' onClick={() => setIsOpen(false)}>
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
					className='flex w-full items-center py-2 text-base font-semibold'
					onClick={() => setIsOpen(false)}>
					{navItem.label}
				</Link>
			)
		)}
	</Accordion>
)
