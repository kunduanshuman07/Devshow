import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Devshow');
        console.log("Database connection successfull");
    } catch (error) {
        console.error(error);
    }
}
