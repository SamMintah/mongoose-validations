const express = require('express');
const postRouter = require("./modules/posts/posts.route")
const {dbConnect} = require("./config/dbConnect")

const app = express();

app.use(express.json())

app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please posts /posts to get all products")
})

app.use('/posts',postRouter);

async function start(){
    await dbConnect();
    
    app.listen(4000 ,(err)=>{
        console.log(" Server listening on http://localhost:4000");
    });
    
}


start();