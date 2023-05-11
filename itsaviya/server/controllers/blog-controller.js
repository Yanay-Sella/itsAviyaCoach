const { Blog } = require("../models/blogModel.js");

const getBlogByTitle = async (req, res) => {
  const name = req.params.title;
  const blog = await Blog.findOne({ name: name });
  res.json({ blog });
};

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({}); //need to filter when more fields will be added
  res.json(blogs);
};

const postNewBlog = async (req, res) => {
  const { name, title, intro, content, imageUrl, categories } = req.body;
  const newPost = new Blog({
    name,
    title,
    intro,
    content,
    imageUrl,
    categories,
  });
  let foundPost;
  foundPost = await Blog.findOne({ name });
  if (foundPost) {
    console.log("name conflict when posting");
    return res.status(409).json({ message: "name" });
  }
  foundPost = await Blog.findOne({ title });
  if (foundPost) {
    console.log("title conflict when posting");
    return res.status(409).json({ message: "title" });
  }

  try {
    await newPost.save();
    console.log("saved");
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBlogByTitle, getAllBlogs, postNewBlog };
