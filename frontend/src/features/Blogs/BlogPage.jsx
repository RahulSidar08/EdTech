import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("APi fetching")
        const res = await axios.get("https://dev.to/api/articles");
        console.log(res)
        setPosts(res.data);
      } catch (error) {
        console.log(error)
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.cover_image || post.social_image}
                alt={post.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  <Link to={`/blog/details/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 mt-2">{post.description || "No description available."}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
