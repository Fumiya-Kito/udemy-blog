import Head from "next/head";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Udemy Blog</title>
        <meta name="description" content="Next.jsの総復習 (Udemy Course)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
