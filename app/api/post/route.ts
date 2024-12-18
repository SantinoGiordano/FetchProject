import dbConnect from "@/utils/db";
import Account from "@/app/model/Account";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, age, username, password } = await request.json()
    const newAccount = new Account({ name, email, age, username, password})
    await newAccount.save()
    return NextResponse.json(newAccount,{status:201})
  } catch (error) {
    console.log(error);
  }
}
