const express = require("express");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getBlogByTitle,
  getAllBlogs,
  postNewBlog,
} = require("../controllers/blog-controller.js");

const router = express.Router();

router.get("/:title", getBlogByTitle);
router.get("/", getAllBlogs);

router.post("/", verifyAdmin, postNewBlog);

module.exports = router;
