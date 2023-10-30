import { Post } from "@/types";
import PostsGrid from "../posts/posts-grid";

function FeaturedPosts(props : { posts: Post[]}) {


  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts}/>
    </section>
  )
}

export default FeaturedPosts;