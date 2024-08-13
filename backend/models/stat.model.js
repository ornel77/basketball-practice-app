import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
    FG: {
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
        required: true,
        default: Date.now()
    }
})

export const Stat = mongoose.model("Stat", statSchema)