import mongoose from "mongoose"

const likeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const likes = mongoose.model('Likes', likeSchema);
export default likes;