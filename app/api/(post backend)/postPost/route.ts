import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";
import Userpost from "@/app/model/Userpost";

export async function POST(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from the request body
    const { title, img, description, likes, genre } = await request.json();

    const newPost = new Userpost({
      title,
      img,
      description,
      likes,
      genre,
    });

    await newPost.save();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error during account creation:", error);

    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
