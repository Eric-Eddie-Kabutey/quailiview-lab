import PostLayout from '@/components/layouts/post-layout';
import { samplePost } from '@/data/sample-post';

export default function SamplePostPage() {
  return (
    <>      
      <main>
        <PostLayout post={samplePost} />
        {/* You could add related posts, etc. here */}
      </main>     
    </>
  );
}