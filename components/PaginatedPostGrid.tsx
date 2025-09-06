'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from '@/components/module/framer-motion'
import { Post } from '@/types'
import PostCard from '@/components/shared/post-card'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Image from 'next/image'
import BackgroundEffect from './shared/background-effect'

// Props for our reusable component
interface PaginatedPostGridProps {
	title: string
	initialPosts: Post[]
	postType: 'blog' | 'case-study'
}

const POSTS_PER_PAGE = 6

export default function PaginatedPostGrid({
	title,
	initialPosts,
	postType,
}: PaginatedPostGridProps) {
	const [searchTerm, setSearchTerm] = useState('')
	const [sortOption, setSortOption] = useState('recent')
	const [selectedCategory, setSelectedCategory] = useState('All Categories')
	const [currentPage, setCurrentPage] = useState(1)

	// Derive unique categories from the posts
	const categories = useMemo(() => {
		const allCategories = initialPosts.map((post) => post.category)
		return ['All Categories', ...Array.from(new Set(allCategories))]
	}, [initialPosts])

	// The core logic: filter, search, and sort posts
	const filteredAndSortedPosts = useMemo(() => {
		let posts = [...initialPosts]

		// 1. Filter by category
		if (selectedCategory !== 'All Categories') {
			posts = posts.filter((post) => post.category === selectedCategory)
		}

		// 2. Filter by search term
		if (searchTerm) {
			posts = posts.filter(
				(post) =>
					post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					post.summary.toLowerCase().includes(searchTerm.toLowerCase())
			)
		}

		// 3. Sort posts
		posts.sort((a, b) => {
			const dateA = new Date(a.publishedDate).getTime()
			const dateB = new Date(b.publishedDate).getTime()
			return sortOption === 'recent' ? dateB - dateA : dateA - dateB
		})

		return posts
	}, [initialPosts, selectedCategory, searchTerm, sortOption])

	// Pagination logic
	const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE)
	const paginatedPosts = filteredAndSortedPosts.slice(
		(currentPage - 1) * POSTS_PER_PAGE,
		currentPage * POSTS_PER_PAGE
	)

	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page)
		}
	}

	return (
		<section className='relative z-10 bg-[#FFFFFF] py-24 sm:py-32'>
			<BackgroundEffect lineColor='gray-200' />

			<div className='relative mx-auto lg:max-w-5xl xl:max-w-6xl px-4 sm:px-0'>
				<div className='grid grid-cols-1 md:grid-cols-2 md:items-center justify-between'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 mb-12'>
						{title}
					</h2>

					{/* Desktop Filter Bar */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-12 overflow-hidden'>
						<div className='relative'>
							<Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-600' />
							<Input
								type='search'
								placeholder='Search...'
								className='pl-10 text-gray-700 border border-gray-300 focus:border-gray-300'
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value)
									setCurrentPage(1) // Reset to first page on search
								}}
							/>
						</div>

						<div>
							<Select value={sortOption} onValueChange={setSortOption}>
								<SelectTrigger className='text-gray-600'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent className='text-gray-600 bg-[#FAFFFF]'>
									<SelectItem value='recent'>Most Recent</SelectItem>
									<SelectItem value='oldest'>Oldest</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<Select
								value={selectedCategory}
								onValueChange={setSelectedCategory}>
								<SelectTrigger className='text-gray-600'>
									<SelectValue />
								</SelectTrigger>
								<SelectContent className='text-gray-600 bg-[#FAFFFF]'>
									{categories.map((cat) => (
										<SelectItem key={cat} value={cat}>
											{cat}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
					{/* Filters for mobile */}
					<div className='flex justify-between md:hidden'>
						<Select value={sortOption} onValueChange={setSortOption}>
							<SelectTrigger className='text-gray-600'>
								<SelectValue className='text-gray-600' />
							</SelectTrigger>
							<SelectContent className='text-gray-600 border border-gray-400 bg-[#FAFFFF]'>
								<SelectItem value='recent' className='text-gray-600'>
									Most Recent
								</SelectItem>
								<SelectItem value='oldest' className='text-gray-600'>
									Oldest
								</SelectItem>
							</SelectContent>
						</Select>
						<Select
							value={selectedCategory}
							onValueChange={(value) => {
								setSelectedCategory(value)
								setCurrentPage(1) // Reset to first page on filter
							}}>
							<SelectTrigger className='text-gray-600'>
								<SelectValue />
							</SelectTrigger>
							<SelectContent className='text-gray-600 bg-[#FAFFFF]'>
								{categories.map((cat) => (
									<SelectItem key={cat} value={cat}>
										{cat}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Post Grid and "No Results" Message */}
				<AnimatePresence mode='wait'>
					<motion.div
						key={`${selectedCategory}-${sortOption}-${currentPage}-${searchTerm}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}>
						{paginatedPosts.length > 0 ? (
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
								{paginatedPosts.map((post) => (
									<PostCard key={post.slug} post={post} />
								))}
							</div>
						) : (
							<div className='text-center py-24'>
								<h3 className='text-xl font-semibold'>No Results Found</h3>
								<p className='text-gray-500 mt-2'>
									Try adjusting your search or filters.
								</p>
							</div>
						)}
					</motion.div>
				</AnimatePresence>

				{/* Pagination Controls */}
				{totalPages > 1 && (
					<div className='mt-16 flex justify-between items-center gap-4'>
						<Button
							variant='ghost'
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}>
							<Image
								src='/assets/icons/prev-btn.png'
								alt='previous icon'
								width={24}
								height={24}
								className=''
							/>
							Previous
						</Button>
						<div className='flex items-center gap-2'>
							{[...Array(totalPages)].map((_, i) => (
								<Button
									key={i + 1}
									variant={currentPage === i + 1 ? 'default' : 'outline'}
									size='icon'
									onClick={() => handlePageChange(i + 1)}
									className={
										currentPage === i + 1
											? 'bg-[#03444A] text-[#FAFFFF]'
											: 'bg-[#FAFFFF]'
									}>
									{i + 1}
								</Button>
							))}
						</div>
						<Button
							variant='ghost'
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}>
							Next{' '}
							<Image
								src='/assets/icons/next-btn.png'
								alt='next icon'
								width={24}
								height={24}
								className='ml-2'
							/>
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}
