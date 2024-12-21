import Userpost from '@/app/model/Userpost';
import dbConnect from '@/utils/db';

import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    await dbConnect(); // Ensure dbConnect is awaited
    const userpost = await Userpost.find(); // Await the query result
    return new NextResponse(JSON.stringify(userpost), { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new NextResponse('Error in Fetching userpost: ' + error, { status: 500 });
  }
};
