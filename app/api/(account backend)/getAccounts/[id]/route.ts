import dbConnect from "@/utils/db"; // Your DB connection utility
import Account from "@/app/model/Account"; // Your Account model
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    // Connect to the database
    await dbConnect();

    // Find the account by id
    const account = await Account.findById(id);

    if (!account) {
      return NextResponse.json({ message: "Account not found" }, { status: 404 });
    }

    // Return the account data as JSON
    return NextResponse.json(account, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching account" }, { status: 500 });
  }
};
