import express from "express";
import { createProject, getAllProjects, seekColaboration } from "../controllers/project.controller.js";

const router = express.Router();

router.get('/projects-feed', getAllProjects);
router.post('/create-project', createProject);
router.post('/add-colab', seekColaboration);

export default router;