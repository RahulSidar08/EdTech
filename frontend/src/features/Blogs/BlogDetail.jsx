import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null); 

  useEffect(() => {
    const getPostData = async () => {
      try {
        const res = await axios.get(`https://dev.to/api/articles/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    getPostData();
  }, [id]);
  return (
    <div className="max-w-4xl mx-auto py-8">
      {post ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={post.cover_image || post.social_image}
            alt={post.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
            <p className="text-sm text-gray-600 mt-2">{post.description || "No description available."}</p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <span>
                <strong>{post.comments_count}</strong> Comments
              </span>
              <span className="ml-4">
                <strong>{post.positive_reactions_count}</strong> Reactions
              </span>
            </div>
            <a
              href={`https://dev.to${post.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 inline-block"
            >
              Read Full Article on Dev.to
            </a>
          </div>
        </div>
      ) : (
        <p>Loading post details...</p>
      )}
    </div>
  );
};

export default BlogDetail;
