import mongoose from "mongoose"

const endorseSchema = new mongoose.Schema({
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

const endorse = mongoose.model('Endorse', endorseSchema);
export default endorse;