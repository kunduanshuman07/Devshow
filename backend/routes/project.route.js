import express from "express";
import { createProject, getAllProjects, getProjectDetail } from "../controllers/project.controller.js";

const router = express.Router();

router.get('/projects-feed', getAllProjects);
router.post('/create-project', createProject);
router.post('/project-detail', getProjectDetail);

export default router;