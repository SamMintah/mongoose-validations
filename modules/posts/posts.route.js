const router = require("express").Router;
const {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
 
} = require("./posts.controller");
const {authRequired} =require("../middlewares/authRequired")


const postRouter = router();

postRouter.route("/")
  .all(authRequired)
  .get(getPosts)
  .post(createPost);
postRouter.route("/:postId")
  .all(authRequired)
  .patch(updatePost)
  .delete(deletePost)
  .get(getPost);

module.exports = {postRouter};

