const router =require("express").Router

const {registerUser} = require("./userAuth.controller");
 

const authRouter = router();

authRouter.post("/",registerUser);

module.exports ={authRouter};
