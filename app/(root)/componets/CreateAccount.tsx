"use client";

import axios from "axios";
import { useState } from "react";

export function CreateAccount() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/post", {
        name,
        email,
        age,
        username,
        password,
      });
      console.log(response)
    } catch (error) {
      console.log(error);
      alert("Failed Account")
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-lg w-full max-w-"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Create Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-600"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-700 text-white font- rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
