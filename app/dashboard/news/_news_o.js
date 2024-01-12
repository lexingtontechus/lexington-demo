"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=30&context=embed",
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="mx-auto">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">News</h1>
      <h2 className="text-2xl uppercase font-semibold p-4 text-center">
        Tech Crunch API Integration{" "}
      </h2>
      <h3 className="text-xl text-center py-4">
        This is a realtime showcase of an API integration using NextJS dynamic
        client side rendering.
      </h3>
      <div className="m-4 px-8 mx-auto justify-between flex flex-grow flex-wrap gap-4">
        {loading ? (
          <h1 className="text-2xl uppercase font-semibold mx-auto">
            Loading News{" "}
            <span className="loading loading-ring loading-sm"></span>
          </h1>
        ) : (
          posts.map((post) => (
            <div
              className="card w-96 bg-base-200 shadow-xl max-h-[500px]"
              key={post.id}
            >
              <figure className="image-full h-32">
                <img
                  src={post.jetpack_featured_media_url}
                  alt={post.title.rendered}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{post.title.rendered}</h3>
                <p className="text-sm">{post.excerpt.rendered}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary font-semibold">
                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsPage;
