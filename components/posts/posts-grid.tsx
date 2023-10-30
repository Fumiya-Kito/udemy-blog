import { Post } from '@/types';
import PostItem from './post-item';

function PostsGrid(props: {posts: Post[]}) {
  const { posts } = props;

  return <ul>
    {posts.map(post => <PostItem key={post.slug} post={post}/>)}
  </ul>
}

export default PostsGrid;