import mongoose from "mongoose";

const userSchema = new mongoose.Schema(

 {
    username: {
        type: String,
        required: true,
        min: 4
    },

    email:{
        type: String,
        max: 30,
        required: true,
        unique: true,
        lowercase: true
    }, 

    password:{
        type: String,
        required: true,
        max: 8,
        lowercase: true
    },

    isActive:{
        type: Boolean,
        default: false
    },

    date:{
        type: Date,
        default: Date.now()
    }
 },

 {timestamps: true}  // to know when the user is created at and when it is update at

);


export const User = mongoose.model("User", userSchema);   // this line means only create User model only when exporting it;