import mongoose, { Schema } from "mongoose";

const userSchema =new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    stats: [{type: mongoose.Schema.Types.ObjectId, ref: "Stat"}]
    
}, {timestamps: true})

export const User = mongoose.model('User', userSchema)