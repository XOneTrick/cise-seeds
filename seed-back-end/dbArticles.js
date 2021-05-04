import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  author: String,
  semethod: String,
  researchmethod: String,
  journal: String,
  article: String,
  publishdate: Number,
  year: Number,
});

export default mongoose.model("articles", articleSchema);
