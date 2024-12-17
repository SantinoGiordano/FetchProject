// import { Schema } from 'inspector/promises'
import mongoose from "mongoose";

export interface IAccount extends Document {
  _id: number;
  name: string;
  age: number;
  email: string;
}

const userSchema = new mongoose.Schema({
  _id: { type: Number },
  name: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  age: { type: Number },
  email: { type: Number },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model<IAccount>("user", userSchema);
export default User;
