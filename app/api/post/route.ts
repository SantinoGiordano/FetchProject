import dbConnect from "@/utils/db";
import Account from "@/app/model/Account";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from the request body
    const { name, email, age, username, password } = await request.json();

    // Validation for required fields
    if (!name || !email || !age || !username || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Check if the username already exists
    const existingUser = await Account.findOne({ username });
    if (existingUser) {
      return NextResponse.json({ error: "Username already exists" }, { status: 400 });
    }

    // Create a new Account document
    const newAccount = new Account({
      name,
      email,
      age,
      username,
      password, // Remember to hash the password in production
    });

    // Save the document to the database
    await newAccount.save();

    // Return the new account with a success response
    return NextResponse.json(newAccount, { status: 201 });

  } catch (error) {
    console.error("Error during account creation:", error);

    // Return an error response if something goes wrong
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

