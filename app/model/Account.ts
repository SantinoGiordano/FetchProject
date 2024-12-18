// import { Schema } from 'inspector/promises'
import mongoose from "mongoose";

export interface IAccount extends Document {
  name: string;
  age: number;
  email: string;
  password: string;
  username: string;
}

const accountSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  age: { 
    type: Number,
    required: true
},
  
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

// const Account = mongoose.model<IAccount>("account", accountSchema);
const Account =
  mongoose.models.account || mongoose.model("account", accountSchema);

export default Account;
