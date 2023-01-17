const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  header: String,
  text: String,
});

const blogSchema = new mongoose.Schema({
  name: { type: String, unique: true }, //english url string
  title: { type: String, unique: true }, //hebrew string
  intro: { type: String, required: true },
  content: { type: [sectionSchema], required: true },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
