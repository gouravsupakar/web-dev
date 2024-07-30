import express from "express";
import { Post } from "../models/Post.js";

const Router = express.Router();


// gets back all the post
Router.get("/", async(req,res) => {
    const posts = await Post.find();

    try {
        res.json(posts)
    } catch (error) {
        res.status(400).send("Error fetching data from database", error)
    }
})


// submits new posts
Router.post("/", async(req,res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    try {
        const savedPost = await newPost.save();
        res.send(savedPost);
        console.log(savedPost);
    } catch (error) {
        res.status(400).send(error);
        console.error("error in saving the data", error);
    }
});

// to get back specfic post from the params

Router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

// delete a post 

Router.delete("/:postId", async(req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(deletedPost);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
});

// update a post

Router.patch("/:postId", async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId},
            { $set: {title: req.body.title } }
        );
        res.send(updatedPost);
    } catch (error) {
        res.status(400).send(error);
    }
})




export default Router;