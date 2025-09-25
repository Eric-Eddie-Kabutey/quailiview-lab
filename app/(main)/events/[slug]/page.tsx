import { notFound } from 'next/navigation'
import PostLayout from '@/components/layouts/post-layout'
import { Post } from '@/types'

import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/mdx-components'

// Import our new library functions
import { getAllContentSlugs, getContentBySlug } from '@/lib/content'


interface EventsPageProps {
	params: Promise<{ slug: string }>
}

// This function tells Next.js which pages to pre-build
export async function generateStaticParams() {
	const posts = getAllContentSlugs('events')
	return posts.map((post) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: EventsPageProps) {
	const { slug } = await params
	try {
		const { frontmatter, content: mdxSource } = getContentBySlug(slug, 'events')

		// Use `compileMDX` with the plain components object
		const { content } = await compileMDX({
			source: mdxSource,
			// Pass the imported object directly
			components: mdxComponents,
			options: {
				parseFrontmatter: false,
			},
		})

		return (
			<article className='container mx-auto px-4 lg:max-w-5xl xl:max-w-6xl py-10'>
				<PostLayout post={frontmatter as Post} content={content} contentType="events"  />
			</article>
		)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		notFound() // If the MDX file doesn't exist, show a 404 page
	}
}
