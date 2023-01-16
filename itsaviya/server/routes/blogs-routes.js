const express = require("express");

const { getBlogByTitle } = require("../controllers/blog-controller.js");

const router = express.Router();

router.get("/:title", getBlogByTitle);

module.exports = router;
