const jwt = require("jsonwebtoken");

exports.authRequired=(req,res,next)=>{
 const authorization =req.headers.authorization;

 if(!authorization){
  res.status(402).json({err:"Please login to use use the platform"});
 }

 const token = authorization.split(" ")[1];

  if(!token){
    res.status(402).json({err:"Please login to use use the platform"});
  }

  let user =jwt.verify(
    token,
    "4b94f55522497239f8de28f52a4e5dfb163937ab196b6d4b422298dbe4ffaec6"
    );
  console.log(user)
  req.user=user;
    next();
}
