import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction.jsx";
import PostCard from "../components/PostCard.jsx";
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6  p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl  font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Welcome to our blog dedicated to React.js, JavaScript, and Next.js!
          Explore the latest insights, tutorials, and best practices in the
          dynamic world of web development.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm
      text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-blue-100 dark:bg-slate-700 max-w-screen-xl mx-auto mb-6 ">
        <CallToAction />
      </div>
      <div className="max-w-9xl flex flex-col gap-8 px-20 mx-auto">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 mx-w-9xl">
            <h2 className="text-2xl font-semibold text-center ">
              Recent Posts
            </h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center mb-5 "
            >
              view all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
