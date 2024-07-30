import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true,
        },

        complete:{
            type: Boolean,
            default: false
        },

        // this created by is used to show how to use relational feature of mongodb. this is to show how we connect todo database with user database.
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        subTodo:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // Array of SubTodo

        
    },
    
    {timestamps: true});



export const Todo  = mongoose.model("Todo", todoSchema);