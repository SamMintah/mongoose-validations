const router = require("express").Router;
const {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
 
} = require("./posts.controller");


const postRouter = router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:postId").patch(updatePost).delete(deletePost).get(getPost);

module.exports = postRouter;

