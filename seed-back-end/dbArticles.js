import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  author: String,
  publishDate: Int16Array,
});

export default mongoose.model("articles", articleSchema);
