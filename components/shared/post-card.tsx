import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { Post } from '@/types/index';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function PostCard({ post }: { post: Post }) {
  // Determine the correct path based on category or a future 'type' property
  const postUrl = `/blog/${post.slug}`; // This can be adapted for case studies later

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link href={postUrl} className="group block h-full">
        <div className="flex flex-col h-full bg-[#FAFFFF] rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
          
          {/* Image and Category Tag */}
          <div className="relative">
            <div className="aspect-[16/10] w-full">
              <Image
                src={post.coverImage}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover"
                // placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 rounded-md px-2 py-1 text-xs font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-6 flex flex-col flex-grow">
            <p className="text-sm text-gray-500">{post.publishedDate}</p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 leading-tight group-hover:text-[#03444A] transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
              {post.summary}
            </p>
            <div className="mt-4">
              <span className="relative text-[#03444A] font-semibold text-sm">
                Read More
                {/* Animated Underline */}
                <span className="absolute bottom-[-2px] left-0 h-0.5 bg-[#03444A] w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}