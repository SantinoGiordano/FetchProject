import Account from "@/app/model/Account";
import { NextResponse } from "next/server";
import dbConnect from "@/utils/db"


export async function POST(request:any){
   await dbConnect()

   const{username, password} = await request.json();

   try {
    const existingAccount = await Account.findOne({username})
    if(existingAccount){
        return NextResponse.json({message:"Account already registered"}, {status:401})    
    }
    const newAccount = new username({username,password});
    await newAccount.save();
    return NextResponse.json({message:'Registration Success'}, {status:200})
   } catch (error) {
    return NextResponse.json({message:"Internal Server Error"}, {status:500})
   }
}



