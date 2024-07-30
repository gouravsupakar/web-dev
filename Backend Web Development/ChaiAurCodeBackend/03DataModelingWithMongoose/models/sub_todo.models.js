import mongoose from "mongoose";

const subTododSchema = new mongoose.Schema(
{
    title:{
        type: String,
        required: true
    },

    content:{
        type: String,
        max: 252
    },

    complete:{
        type: Boolean,
        default: false
    }
}, 

{timestamps: true}

);



export const SubTodo = mongoose.model("SubTodo", subTododSchema);