const express = require("express");
const postsController = require("../Controllers/posts.js");

const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/post", postsController.createPost);

module.exports = router;
