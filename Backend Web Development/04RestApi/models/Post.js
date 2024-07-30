import mongoose from "mongoose";

const postSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

export const Post =  mongoose.model("Post", postSchema);

