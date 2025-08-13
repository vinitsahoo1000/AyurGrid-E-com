import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if(!MONGO_URI){
    throw new Error("MONGO_URI environment variable is not defined."); // throw an error if URL does not exists!
}

export const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("MongoDB connected");
    }catch(error){
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}