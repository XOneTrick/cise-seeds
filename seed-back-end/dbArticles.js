import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  author: String,
});

export default mongoose.model("articles", articleSchema);
