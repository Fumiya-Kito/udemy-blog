import AllPosts from "@/components/posts/all-posts";

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started1",
      title: "getting-started1",
      image: "vercel.svg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-01",
    },
    {
      slug: "getting-started2",
      title: "getting-started2",
      image: "vercel.svg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-01",
    },
    {
      slug: "getting-started3",
      title: "getting-started3",
      image: "vercel.svg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-01",
    },
  ];

  return <AllPosts posts={DUMMY_POSTS}/>
}

export default AllPostsPage;