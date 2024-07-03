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
    features: {
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
        type: Boolean,
    },
    colabDescription: {
        type: String,
        default: null
    },
    colabSkills: {
        type: [String],
        default: [],
    },
    contributors: {
        type: Number,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId }],
    endorsements: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, default: Date.now },
})

const project = mongoose.model('Projects', projectSchema);
export default project;