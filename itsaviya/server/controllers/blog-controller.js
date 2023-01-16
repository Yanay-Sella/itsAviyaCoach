const { Blog } = require("../models/blogModel.js");

const getBlogByTitle = async (req, res) => {
  const { name } = req.body;
  const blog = await Blog.findOne({ name: name });
  console.log(blog);
  res.json({ room });
};

module.exports = { getBlogByTitle };
