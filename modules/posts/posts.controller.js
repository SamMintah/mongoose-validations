const Post =require("./posts.model")


const verifyAuthor = async(req,user)=>{
  //checks 
let post = await Post.findById(req.params.postId)

if(post._id.toString()!== user.req.id){
  return res
      .status(406)
      .json({error:"you are not permitted to perform this action"});
}

}

const getPosts= async(req,res)=>{
    
      const posts= await Post.find({})
      res.status(200).json({posts});
}



const getPost= async(req,res)=>{
  const post= await Post.findById(req.params.postId);
  res.status(200).json({post});
};

const getAllPostByUser = async(req,res)=>{
const posts =await Post.find({author:req.user.id})
res.status(200).json({posts});

};

const createPost= async(req,res)=>{
  const{title, body, published} = req.body;

  const post =await Post.create({
  title,
  body,
  published,
  author:req.user.id,
  })

 
  res.status(200).json({post})

};


const updatePost=async(req,res)=>{

  const {postId} = req.params;

// check
  await verifyAuthor()
 const post = await Post.findByIdAndUpdate(postId, {...req.body },{ new:true})
   res.status(200).json({post});

}


const deletePost= async(req,res)=>{

    await verifyAuthor();

    const post = await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("post deleted succecfully");
};

module.exports={
getPosts,
getPost,
createPost,
updatePost,
deletePost,
getAllPostByUser,

}