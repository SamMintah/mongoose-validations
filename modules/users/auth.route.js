const router =require("express").Router

const {loginUser,registerUser} = require("./userAuth.controller");
 

const authRouter = router();

authRouter.post("/register",registerUser);
authRouter.post("/login",loginUser);

module.exports ={authRouter};
