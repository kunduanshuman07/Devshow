import mongoose from "mongoose"

const projectCommentsSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const projcomment = mongoose.model('Projcomments', projectCommentsSchema);
export default projcomment;