"use client"; // Add this to mark the component as client-side

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

type Account = {
  _id: string;
  name: string;
  email: string;
  // Include any other fields you want to show in the profile
};

const UserProfile = () => {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const { id } = router.query; // Get the `id` from the URL

  // Fetch the specific account's data based on the `id` from the URL
  useEffect(() => {
    const fetchAccount = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/getAccount/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch account");
          }
          const data = await response.json();
          setAccount(data); // Set the fetched data
        } catch (err) {
          setError("Failed to load account details");
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      }
    };

    fetchAccount(); // Call the fetch function
  }, [id]); // Only fetch when `id` changes

  // Render the UI
  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Profile: {account?.name}</h1>
      <p>Email: {account?.email}</p>
      {/* Add more account details here if needed */}
    </div>
  );
};

export default UserProfile;
