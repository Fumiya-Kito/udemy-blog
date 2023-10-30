import ReactMarkdown from 'react-markdown';
import PostHeader from "./post-header";
import { Post } from '@/types';

function PostContent({ post }: { post: Post}) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  

  return <article>
    <PostHeader title={post.title} image={imagePath} />
    <ReactMarkdown>{post.content}</ReactMarkdown>
    
  </article>
}

export default PostContent;