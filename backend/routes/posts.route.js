import express from "express";
import { createPost, getAllPosts, getPostDetail, likePost, savePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post('/create-post', createPost);
router.get('/get-all-posts', getAllPosts);
router.post('/get-post-detail', getPostDetail);
router.post('/save-post', savePost);
router.post('/like-post', likePost);

export default router;