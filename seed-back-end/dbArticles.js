import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  author: String,
});

export default mongoose.model("articles", articleSchema);

const mongoose = require("mongoose");
const articleSchema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },

  semethod: {
    type: String,
    required: true,
  },
});

const dbArticles = mongoose.model("articles", articleSchema, "articles");

module.exports = dbArticles;
