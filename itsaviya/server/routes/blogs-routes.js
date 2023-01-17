const express = require("express");

const {
  getBlogByTitle,
  getAllBlogs,
} = require("../controllers/blog-controller.js");

const router = express.Router();

router.get("/:title", getBlogByTitle);
router.get("/", getAllBlogs);

module.exports = router;
