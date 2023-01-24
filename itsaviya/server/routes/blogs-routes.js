const express = require("express");

const {
  getBlogByTitle,
  getAllBlogs,
  postNewBlog,
} = require("../controllers/blog-controller.js");

const router = express.Router();

router.get("/:title", getBlogByTitle);
router.get("/", getAllBlogs);

router.post("/", postNewBlog);

module.exports = router;
