import express from "express";
import { createProject, getAllProjects, getProjectDetail, seekColaboration } from "../controllers/project.controller.js";

const router = express.Router();

router.get('/projects-feed', getAllProjects);
router.post('/create-project', createProject);
router.post('/add-colab', seekColaboration);
router.post('/project-detail', getProjectDetail);

export default router;