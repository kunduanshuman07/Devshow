import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId },
    userImage: { type: String },
    username: { type: String },
    caption: { type: String },
    mediaLink: {type: String},
    comments: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, default: Date.now }
});

const post = mongoose.model("Posts", postSchema);

export default post;