import mongoose, { Schema } from "mongoose";


const dislikesSchema = new Schema({
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    },

    video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },

    dislikedBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    tweet: {
        type: Schema.Types.ObjectId,
        ref: "Tweet"
    },
}, {timestamps: true})


export const Dislike = new mongoose.model("Dislike", dislikesSchema)