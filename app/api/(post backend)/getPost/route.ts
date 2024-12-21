
import Userpost from '@/app/model/Userpost';
import dbConnect from '@/utils/db';
import { NextResponse } from 'next/server';
import React from 'react'

export const GET = async(request: Request, { params }: { params: { id: string } })=>{

    const {id} = params;

    try {
        await dbConnect
        const post = await Userpost.findById(id)
        console.log(post)
    if (!post) {
          return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }
    
        // Return the account data as JSON
        return NextResponse.json(post, { status: 200 });
      } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error fetching post" }, { status: 500 });
      }
    };

