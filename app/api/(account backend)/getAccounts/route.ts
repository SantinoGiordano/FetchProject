import dbConnect from '@/utils/db';
import Account from '@/app/model/Account';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await dbConnect(); // Ensure dbConnect is awaited
    const accounts = await Account.find(); // Await the query result
    return new NextResponse(JSON.stringify(accounts), { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new NextResponse('Error in Fetching Accounts: ' + error, { status: 500 });
  }
};
