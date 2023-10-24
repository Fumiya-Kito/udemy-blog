import { Post } from '@/types';
import PostItem from './post-item';

interface PostsGridProps {
  posts: Post[],
}

function PostsGrid(props: PostsGridProps) {
  const { posts } = props;

  return <ul>
    {posts.map(post => <PostItem key={post.slug} post={post}/>)}
  </ul>
}

export default PostsGrid;