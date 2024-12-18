// import { Schema } from 'inspector/promises'
import mongoose from "mongoose";

export interface IAccount extends Document {
  _id: number;
  name: string;
  age: number;
  email: string;
}

const accountSchema = new mongoose.Schema({
  _id: { type: Number },
  name: {
    type: String,
    index: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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

// const Account = mongoose.model<IAccount>("account", accountSchema);
const Account = mongoose.models.account || mongoose.model('account', accountSchema);

export default Account;
