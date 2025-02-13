import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
dotenv.config();
const connectdb = async() => {
    try {
        mongoose.connect(`${process.env.MONGOURI}`);
        console.log("Connected to mongoDb Database")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb;