import express from "express";
import { createPost, getAllPosts, getPostDetail } from "../controllers/post.controller.js";

const router = express.Router();

router.post('/create-post', createPost);
router.get('/get-all-posts', getAllPosts);
router.post('/get-post-detail', getPostDetail);

export default router;