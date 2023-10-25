import { Post } from "@/types";
import PostsGrid from "./posts-grid";

function AllPosts(props: { posts: Post[] }) {
  return <section>
    <h1>All Posts</h1>
    <PostsGrid posts={props.posts}/>
  </section>
}

export default AllPosts;