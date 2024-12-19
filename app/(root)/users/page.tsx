"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Exspanding from "../componets/exspanding";

// Define the account type
type Account = {
  _id: string;
  name: string;
  email: string;
  username:string,
  age:number
};

const UsersPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([]); // Store accounts in state
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch the accounts from the API on mount
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("/api/getAccounts");
        if (!response.ok) {
          throw new Error("Failed to fetch accounts");
        }
        const data = await response.json();
        setAccounts(data); // Set fetched data to state
      } catch (err) {
        setError("Failed to load accounts");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchAccounts(); // Call fetch function
  }, []);

  // Render the UI
  if (loading) {
    return <div>Loading accounts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <div className="bg-green-50">
      <div className="pt-20 p-6">
        <h1 className="text-2xl font-semibold text-center mb-8">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {accounts.map((account) => (
            <div
            key={account._id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {account.username}
              </h3>
              <p className="text-gray-600">{account.email}</p>
              <p>{account.name}</p>
              {/* Link to the individual account page using the account's _id */}
              <Link href={`/users/${account._id}`} className="pt-5 text-green-700">View</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <Exspanding/> */}
  </>
  );
};

export default UsersPage;

