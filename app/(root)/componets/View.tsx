'use client'
import CIcon from '@coreui/icons-react';
import { cilThumbUp, } from '@coreui/icons';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Userpost = {
  title: string,
  description: string,
  img: string,
  genre: string, 
  likes: number,
}

const View = () => {
    const [userPost, setUserPost] = useState<Userpost[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUserPost = async () => {
        try {
          const response = await fetch("/api/getPost");
          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          const data = await response.json();
          setUserPost(data); // Set fetched data to state
        } catch (err) {
          setError("Failed to load posts");
        }
      };
  
      fetchUserPost(); // Call fetch function
    }, []);
  
    // Function to handle like button click
    const likeCounter = async (postId: string) => {
      try {
        // Call the API to update likes in the DB
        const response = await fetch(`/api/postPost/${postId}`, {
          method: 'POST',
        });
  
        if (!response.ok) {
          throw new Error("Failed to update likes");
        }
  
        // After updating, refetch the posts to reflect the updated like count
        const updatedPost = await response.json();
        setUserPost((prevPosts) =>
          prevPosts.map((post) =>
            post._id === updatedPost._id ? updatedPost : post
          )
        );
      } catch (err) {
        console.error("Error updating like:", err);
      }
    };
  
    if (error) {
      return <div className="pt-40">{error}</div>;
    }
  
    return (
      <div className="bg-green-50 pt-40">
        <div className="pt-20 p-6">
          <h1 className="text-2xl font-semibold text-center mb-8">Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {userPost.map((post) => (
              <div
                key={post._id}
                className="border p-4 rounded-lg shadow-lg h-[400px] overflow-auto bg-white"
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <span className="text-sm text-gray-500">Genre: {post.genre}</span>
                <p className="text-gray-600 mb-2">{post.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <CIcon
                      icon={cilThumbUp}
                      onClick={() => likeCounter(post._id)}
                      className="p-4 w-16 cursor-pointer"
                    />
                    {post.likes}
                  </span>
                  <Link className="text-blue-500 hover:underline" href={`/post/${post._id}`}>
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default View;
  