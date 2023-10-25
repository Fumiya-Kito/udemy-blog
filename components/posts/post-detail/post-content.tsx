import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started1",
  title: "getting-started1",
  image: "vercel.svg",
  excerpt: "NextJS is a the React framework for production",
  date: "2022-02-01",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return <article>
    <PostHeader title={DUMMY_POST.title} image={imagePath} />
    {DUMMY_POST.content}
  </article>
}

export default PostContent;