import express from "express";
import { addCommentToProject, createProject, endorseProject, getAllProjects, getProjectDetail } from "../controllers/project.controller.js";

const router = express.Router();

router.get('/projects-feed', getAllProjects);
router.post('/create-project', createProject);
router.post('/project-detail', getProjectDetail);
router.post('/add-comment', addCommentToProject);
router.post('/endorse-project', endorseProject);
export default router;