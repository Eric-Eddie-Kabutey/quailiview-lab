import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Event } from '@/types'; 
import { isAfter, subMonths, format } from 'date-fns';

// Define the content types 
export type ContentType = 'blog' | 'case-studies' | 'events';

// The base path to the content directory
const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Gets the slugs for all posts of a given content type.
 * Used for `generateStaticParams` in dynamic pages.
 */
export function getAllContentSlugs(contentType: ContentType) {
    const contentPath = path.join(contentDirectory, contentType);
    const fileNames = fs.readdirSync(contentPath);
    return fileNames.map((fileName) => {
        return {
            slug: fileName.replace(/\.mdx$/, ''),
        };
    });
}

/**
 * Gets the data for a single post by slug, including frontmatter and content.
 * Used in the dynamic [slug] pages.
 */
export function getContentBySlug(slug: string, contentType: ContentType) {
    const fullPath = path.join(contentDirectory, contentType, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the frontmatter and content
    const { data, content } = matter(fileContents);

    return {
        frontmatter: {...data, slug },
        content,
    };
}

/**
 * Gets the frontmatter for all posts of a given type, sorted by date.
 * Used for listing pages (e.g., the main blog page grid).
 */
export function getAllContent<T extends Post | Event>(contentType: ContentType): T[] {
    const contentPath = path.join(contentDirectory, contentType);
    const fileNames = fs.readdirSync(contentPath);

    const allContentData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const { frontmatter } = getContentBySlug(slug, contentType);
        return frontmatter as T;
    });

    // Sort posts by date in descending order (newest first)
    return allContentData.sort((a, b) => {
        // Type guards to distinguish Post and Event
        const getDate = (item: Post | Event) => {
            if ('publishedDate' in item && item.publishedDate) {
                return new Date(item.publishedDate);
            }
            if ('date' in item && item.date) {
                return new Date(item.date);
            }
            return new Date(0); // fallback to epoch if no date found
        };
        const dateA = getDate(a);
        const dateB = getDate(b);
        return dateB.getTime() - dateA.getTime();
    });
}


/**
 *  Gets the most recent posts within a specified time frame.
 * @param {object} options - Optional parameters.
 * @param {number} options.monthsAgo - The number of months back to consider as "latest". Defaults to 2.
 * @param {number} options.limit - The maximum number of posts to return. Optional.
 * @returns {Post[]} An array of the latest Post objects.
 */
export function getLatestPosts({ monthsAgo = 2, limit }: { monthsAgo?: number; limit?: number } = {}): Post[] {
    // 1. Fetch all blog posts using our existing library function.
    const allPosts = getAllContent<Post>('blog');

    // 2. Calculate the date threshold.
    const dateThreshold = subMonths(new Date(), monthsAgo);

    // 3. Filter, sort, and format the posts.
    let latestPosts = allPosts
        .filter(post => {
            const postDate = new Date(post.publishedDate);
            return isAfter(postDate, dateThreshold);
        })
        // The `getAllContent` function already sorts by date, so this is technically redundant
        // but good to keep for clarity in case the base function changes.
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

    // 4. Apply a limit if one was provided.
    if (limit) {
        latestPosts = latestPosts.slice(0, limit);
    }

    // 5. Format the date for display.
    return latestPosts.map(post => ({
        ...post,
        publishedDate: format(new Date(post.publishedDate), 'MMM dd, yyyy'),
    }));
}


/**
 * Gets related content based on the same category, excluding the current post.
 * @param contentType - 'blog', 'case-studies', etc.
 * @param category - The category to match.
 * @param currentSlug - The slug of the current post to exclude.
 * @param limit - The maximum number of related posts to return. Defaults to 3.
 * @returns An array of related Post or Event objects.
 */
export function getRelatedContent<T extends Post | Event>({
    contentType,
    category,
    currentSlug,
    limit = 3,
}: {
    contentType: ContentType;
    category: string;
    currentSlug: string;
    limit?: number;
}): T[] {
    const allContent = getAllContent<T>(contentType);    
    

    const related = allContent
        .filter(item => {
            // Condition A: The item must not be the post the user is currently reading.            
            const isNotCurrentPost = item.slug !== currentSlug;            
            
            // Check if the item has a 'category' property before comparing
            const itemCategory = 'category' in item ? (item as Post).category : undefined;            
            
            const hasSameCategory = itemCategory && itemCategory === category;

            return isNotCurrentPost && hasSameCategory;
        })
        .slice(0, limit);
    
    return related;
}