import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/mdx-components'

import PostLayout from '@/components/layouts/post-layout'
import { Post } from '@/types'

// Import our new library functions
import { getAllContentSlugs, getContentBySlug } from '@/lib/content'

interface CaseStudiesPageProps {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	const posts = getAllContentSlugs('case-studies')
	return posts.map((post) => ({ slug: post.slug }))
}


export default async function PostPage({ params }: CaseStudiesPageProps) {
	const { slug } = await params
	try {
		const { frontmatter, content: mdxSource } = getContentBySlug(
			slug,
			'case-studies'
		)
		
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
				<PostLayout post={frontmatter as Post} content={content} contentType="case-studies"  />
			</article>
		)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		notFound() // If the MDX file doesn't exist, show a 404 page
	}
}
