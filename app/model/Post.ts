import mongoose from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  img: string;
  likes: number;
}

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  like: {
    type: Number,
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

const Post = mongoose.models.post || mongoose.model("post", postSchema);

export default Post;
