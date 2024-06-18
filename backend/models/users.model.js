import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    bio: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    coverPhoto: {
        type: String,
    },
    skills: {
        type: [String],
    },
    experience: {
        type: String,
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId }],
    connections: [{ type: mongoose.Schema.Types.ObjectId }],
    requestsSent: [{ type: mongoose.Schema.Types.ObjectId }],
    requestsReceived: [{ type: mongoose.Schema.Types.ObjectId }],
    messages: [{ type: mongoose.Schema.Types.ObjectId }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId }],
    createdAt: { type: Date, default: Date.now },
})

const user = mongoose.model('Users', userSchema);
export default user;