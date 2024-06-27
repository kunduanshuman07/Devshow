import express from "express";
import authRoutes from "./auth.route.js";
import projectRoutes from "./project.route.js";
import postRoutes from "./posts.route.js";
import networkRoutes from "./network.route.js";
const router = express.Router();

const defaultRoutes = [
    {
        path: "/auth",
        route: authRoutes
    },
    {
        path: "/projects",
        route: projectRoutes
    },
    {
        path: "/community",
        route: postRoutes
    },
    {
        path: "/network",
        route: networkRoutes
    }
]

defaultRoutes.forEach((routes)=>{
    router.use(routes.path, routes.route);
})

export default router;