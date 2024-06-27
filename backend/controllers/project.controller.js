import Project from "../models/projects.model.js";
import Colab from "../models/colab.model.js";

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
        console.log("Success: /v1/projects/project-detail -> Project fetched successfulyy");
        res.status(200).json({ message: "Projects fetched successfully", project });
    } catch (error) {
        console.log("Error: /v1/projects/project-detail ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const createProject = async (req, res) => {
    const { title, description, features, techstacks, contributors, repoLink, demoLink, } = req.body;
    try {
        const project = new Project({ title, description, features, techstacks, contributors, repoLink, demoLink });
        await project.save();
        console.log("Success: /v1/projects/create-project -> Project created successfully")
        res.status(200).json({ message: "Project created successfully", project });
    } catch (error) {
        console.log("Error: /v1/projects/create-project ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const seekColaboration = async (req, res) => {
    const { projectId, description, requirements, duration, commitmentLevel } = req.body;
    try {
        const colab = new Colab({ projectId, description, requirements, duration, commitmentLevel });
        await colab.save();
        const project = await Project.findOneAndUpdate(
            { _id: projectId },
            { $set: { seekColab: colab._id } },
            { new: true }
        )
        await project.save();
        console.log("Success: /v1/projects/seek-colab -> Colaboration added successfully")
        res.status(200).json({ message: "Colaboration added successfully", colab, project });
    } catch (error) {
        console.log("Error: /v1/projects/seek-colab ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}