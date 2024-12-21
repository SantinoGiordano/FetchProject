'use client'

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
  const [userPost, setUserpost] = useState<Userpost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserpost = async () => {
      try {
        const response = await fetch("/api/getposts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setUserpost(data); // Set fetched data to state
      } catch (err) {
        setError("Failed to load posts");
      } 
    };

    fetchUserpost(); // Call fetch function
  }, []);

  if (error) {
    return <div className='pt-40'>{error}</div>;
  }

  return (
    <div className="bg-green-50 pt-40">
      <div className="pt-20 p-6">
        <h1 className="text-2xl font-semibold text-center mb-8">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {userPost.map((post, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              {/* <img 
                src={post.img} 
                alt={post.title} 
                className="w-full h-48 object-cover mb-4 rounded-lg" 
              /> */}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-2">{post.description}</p>
              <span className="text-sm text-gray-500">Genre: {post.genre}</span>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Likes: {post.likes}</span>
                <Link href={`/post/${index}`}>
                  <a className="text-blue-500 hover:underline">Read more</a>
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
