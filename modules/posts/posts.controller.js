const Post =require("./posts.model")


const getPosts= async(req,res)=>{
    try {
      const posts= await Post.find({})
      res.status(200).json({posts});
    } catch (error) {
      res.status(500).json(error);
    }
  

};



const getPost= async(req,res)=>{
    const id = req.params.id;

    try {
      const post= await Post.findById(id);
      res.status(200).json({post});
    } catch (error) {
      res.status(500).json(error);
    }
};


const createPost= async(req,res)=>{
  const{title, body,published} = req.body;

  const post =await Post.create({
  title,
  body,
  published
  })

 
  res.status(200).json({post})

};


const updatePost=async(req,res)=>{

  const postId = req.params.id;
  const { userId } = req.body;

  try {
    const product = await Post.findById(postId);
    if (post.userId === userId) {
      await product.updateOne({ $set: req.body });
      res.status(200).json("post    Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }

}
const deletePost= async(req,res)=>{
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const post = await Post.findById(id);
      if (post.userId === userId) {
        await post.deleteOne();
        res.status(200).json("post deleted successfully");
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
};

module.exports={
getPosts,
getPost,
createPost,
updatePost,
deletePost,

}