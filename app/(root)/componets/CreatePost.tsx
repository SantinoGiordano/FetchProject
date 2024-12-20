
import axios from 'axios';
import React, { useState } from 'react';

export interface IUserpost extends Document {
  title: string;
  description: string;
  img: string;
  likes: number;
  genre: string;
}

export function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [genre,setGenre] = useState('');
//   const [likes, setLikes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/postPost", {
        title,
        description,
        img,
        genre,
        // likes,
      });
      console.log(response);
      alert('Post created successfully!');
    } catch (error) {
      console.log(error);
      alert("Failed to create post");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
    <form
      onSubmit={handleSubmit}
      className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-lg w-full max-w-"
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
        Create Post
      </h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-sm font-medium text-gray-600"
        >
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your username"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="img"
          className="block text-sm font-medium text-gray-600"
        >
          Image:
        </label>

        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Place url"
          className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-700 text-white font- rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Post
      </button>
    </form>
  </div>
  );
}