const Post =require("./posts.model")


const getPosts= async(req,res)=>{
      const posts= await Post.find({})
      res.status(200).json({posts});
}



const getPost= async(req,res)=>{
  const post= await Post.findById(req.params.postId);
  res.status(200).json({post});
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

  const {postId} = req.params;
  const { userId } = req.body;

  const post = await Post.findByIdAndUpdate(postId, {...req.body },{ new:true})
   res.status(200).json({post});

}


const deletePost= async(req,res)=>{
    const post = await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("post deleted succecfully");
};

module.exports={
getPosts,
getPost,
createPost,
updatePost,
deletePost,

}