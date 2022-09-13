const User = require("./users.model");


const registerUser = async (req,res)=>{
    const {email, password}= req.body;
   // check if user already exists
   const isExist = await User.findOne({email:email})

     if (isExist){
      return res.status(400).json({error:"user already exist"});
     }
     const user = await User.create({...req.body})
     res.status(201).json({user});
}

module.exports={registerUser}