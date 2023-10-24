import { Post } from "@/types";
import PostsGrid from "../posts/posts-grid";

function FeaturedPosts({ posts } : { posts: Post[]}) {


  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPosts;