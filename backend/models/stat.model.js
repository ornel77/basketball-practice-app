import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
    fieldGoal: {
        type: Number,
        required: true
    },
    threePoint: {
        type: Number,
        required: true
    },
    layupLeft: {
        type: Number,
        required: true
    },
    layupRight: {
        type: Number,
        required: true
    },
    freeThrow: {
        type: Number,
        required: true
    },
    workoutDate: {
        type: Date,
        default: Date.now()
    },
    comment: {
        type: String,
        trim: true,
        default: "",
    },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}

}, {timestamps: true})

export const Stat = mongoose.model("Stat", statSchema)