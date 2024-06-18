import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.model.js";
import { config } from "dotenv"
config();

export const register = async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newuser = new User({ username, password: hashPassword, email, firstName, lastName });
        await newuser.save();
        const secretKey = process.env.JWT_SECRET_KEY || 'superharddevshowstring';
        const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' });
        console.log("Success: /v1/auth/register -> User registered successfully")
        res.status(200).json({ token, newuser });
    } catch (error) {
        console.log("Error: /v1/auth/register ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User doesnot exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        const secretKey = process.env.JWT_SECRET_KEY || 'superharddevshowstring';
        const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h' });
        console.log("Success: /v1/auth/login -> User loggedin successfully")
        res.status(200).json({ token, user });
    } catch (error) {
        console.log("Error: /v1/auth/login ->", error.message);
        res.status(500).json({ message: "Error: ", error });
    }
}