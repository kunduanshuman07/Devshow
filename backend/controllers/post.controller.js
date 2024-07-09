import Like from "../models/likes.model.js";
import Post from "../models/posts.model.js";
import User from "../models/users.model.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        posts.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });
        console.log("Success: /v1/community/get-all-posts -> Posts fetched successfully")
        res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
        console.log("Error: /v1/community/get-all-posts ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const createPost = async (req, res) => {
    const { userId, username, caption } = req.body;
    try {
        const newPost = new Post({ userId, username, caption });
        await newPost.save();
        console.log("Success: /v1/community/create-post -> Post Created successfully")
        res.status(200).json({ message: "Post Created successfully", newPost });
    } catch (error) {
        console.log("Error: /v1/community/create-post ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const getPostDetail = async (req, res) => {
    const { id } = req.body;
    try {
        const post = await Post.findById(id);
        console.log("Success: /v1/community/get-post-detail -> Post fetched successfully")
        res.status(200).json({ message: "Post fetched successfully", post });
    } catch (error) {
        console.log("Error: /v1/community/get-post-detail ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const likePost = async (req, res) => {
    const { id, userId } = req.body;
    try {
        const post = await Post.findById(id);
        const newLike = new Like({ userId, postId: id });
        await newLike.save();
        const user = await User.findById(userId);
        user.postLikes.push(post._id);
        post.likesCount = post.likes.length + 1;
        post.likes.push(newLike._id);
        await post.save();
        console.log("Success: /v1/community/like-post -> Post liked successfully")
        res.status(200).json({ message: "Post liked successfully", post });
    } catch (error) {
        console.log("Error: /v1/community/like-post ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const savePost = async (req, res) => {
    const { id, userId } = req.body;
    try {
        const post = await Post.findById(id);
        if(!post.userSaves?.includes(userId)){
            post.userSaves.push(userId);
        }
        await post.save();
        console.log("Success: /v1/community/save-post -> Post saved successfully")
        res.status(200).json({ message: "Post saved successfully", post });
    } catch (error) {
        console.log("Error: /v1/community/save-post ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}