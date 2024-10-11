import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("mongodb connected");
        
    } catch(error){
        console.log("error:",error);
        process.exit(1);
        
    }
};

export default connectDB;