import fs from 'fs';
import path from 'path';

// The directory where your MDX files are stored
const postsDirectory = path.join(process.cwd(), 'content');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PostData = {
    slug: string;
    date?: string;
    [ key: string ]: unknown;
};

// Get all possible slugs for static path generation
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}