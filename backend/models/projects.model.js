import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techstacks: {
        type: [String],
    },
    images: {
        type: [String],
    },
    videos: {
        type: [String],
    },
    repoLink: {
        type: String,
    },
    demoLink: {
        type: String,
    },
    seekColab: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    contributors: [{ type: mongoose.Schema.Types.ObjectId }],
    comments: [{ type: mongoose.Schema.Types.ObjectId }],
    endorsements: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, default: Date.now },
})

const project = mongoose.model('Projects', projectSchema);
export default project;