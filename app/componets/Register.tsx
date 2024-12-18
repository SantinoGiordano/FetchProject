"use client";

import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setErrorMessage(""); 
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ username, password }), 
      });

      if (response.ok) {
        
        return alert("Registration complete");
      } else {
        
        return alert("Registration failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later."); // Set error message
      console.error(error); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-slate-500">
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
        <div>
          <label htmlFor="username" className="block text-sm font-medium">Username</label>
          <input
            id="username"
            className="m-2 p-2 border rounded"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            className="m-2 p-2 border rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>} {/* Display error message */}

        <button
          className="border-black m-2 p-2 bg-white"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
