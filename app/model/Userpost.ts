import mongoose from "mongoose";

export interface IUserpost extends Document {
  title: string;
  description: string;
  img: string;
  likes: number;
  genre: string;
}

const userpostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  likes: {
    type: Number,
  },
  genre: {
    type: String,
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

const Userpost =
  mongoose.models.userpost || mongoose.model("userpost", userpostSchema);

export default Userpost;
