import mongoose from "mongoose";

const colabChema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
    },
    requirements: {
        type: [String],
    },
    duration: {
        type: String,
    },
    commitmentLevel: {
        type: String,
    },
    status: {
        type: String,
        default: "Open"
    },
    applicants: [{type: mongoose.Schema.Types.ObjectId}],
    createdAt: { type: Date, default: Date.now },
});

const colab = mongoose.model('Colabs', colabChema);
export default colab;