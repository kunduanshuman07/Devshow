import Project from "../models/projects.model.js";
import Projcomment from "../models/comments.model.js";
export const getAllProjects = async (req, res) => {
    try {
        const allProjects = await Project.find();
        allProjects.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });

        console.log("Success: /v1/projects/projects-feed -> Projects fetched successfully")
        res.status(200).json({ message: "Projects fetched successfully", allProjects });
    } catch (error) {
        console.log("Error: /v1/projects/projects-feed ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const getProjectDetail = async (req, res) => {
    const { id } = req.body;
    try {
        const project = await Project.findById(id);
        const comments = await Projcomment.find({ projectId: id });
        comments.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });
        console.log("Success: /v1/projects/project-detail -> Project fetched successfulyy");
        res.status(200).json({ message: "Projects fetched successfully", project, comments });
    } catch (error) {
        console.log("Error: /v1/projects/project-detail ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const createProject = async (req, res) => {
    const { title, description, features, techstacks, contributors, repoLink, demoLink, seekColab, colabDescription, colabSkills } = req.body;
    try {
        const project = new Project({ title, description, features, techstacks, contributors, repoLink, demoLink, seekColab, colabDescription, colabSkills });
        await project.save();
        console.log("Success: /v1/projects/create-project -> Project created successfully")
        res.status(200).json({ message: "Project created successfully", project });
    } catch (error) {
        console.log("Error: /v1/projects/create-project ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const addCommentToProject = async (req, res) => {
    const { id, comment, userId } = req.body;
    try {
        const project = await Project.findById(id);
        const newComment = new Projcomment({ text: comment, userId, projectId: id });
        await newComment.save();
        if (project) {
            project.comments.push(newComment._id);
            await project.save();
        }
        const comments = await Projcomment.find({ projectId: id });
        comments.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA;
        });
        console.log("Success: /v1/projects/add-comment -> Comment added successfully")
        res.status(200).json({ message: "Comment added successfully", comments });
    } catch (error) {
        console.log("Error: /v1/projects/add-comment ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}