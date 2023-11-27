const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.post( "/api/posts",(req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status('201').json({
        message: "Post added successfully"
    });
});

// app.use("/api/posts", (req, res, next)=>{
//     const posts = [
//         {
//             id:"1",
//             title:"first element",
//             content:"from server"
//         },
//         {
//             id:"2",
//             title:"second element",
//             content:"from server"
//         }
//     ];
//     res.status(200).json({
//         message: "posts fetched successfully",
//         posts: posts
//     })
// });

module.exports = app;