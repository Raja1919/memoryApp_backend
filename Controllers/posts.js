const PostModel = require("../Models/postModel");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostModel.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostModel(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
};
