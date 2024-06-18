import express from "express";
import authRoutes from "./auth.route.js";
import projectRoutes from "./project.route.js";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path: "/projects",
        route: projectRoutes
    }
]

defaultRoutes.forEach((routes)=>{
    router.use(routes.path, routes.route);
})

export default router;