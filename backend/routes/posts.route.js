import express from "express";
import { commentPost, createPost, getAllPosts, getPostDetail, savePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post('/create-post', createPost);
router.get('/get-all-posts', getAllPosts);
router.post('/get-post-detail', getPostDetail);
router.post('/comment-post', commentPost);
router.post('/save-post', savePost);

export default router;