import express from "express";
import { config } from "dotenv";
import http from "http";
import cors from "cors";
import { connectDB } from "./config/db.js";
import apiroutes from "./routes/index.js";

const app = express();
const server = http.createServer(app);
config();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    })
)
app.use("/v1", apiroutes);


connectDB();
server.listen(PORT, () => {
    console.log("Backend Server running on port", PORT);
})