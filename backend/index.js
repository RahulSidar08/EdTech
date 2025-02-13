import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();
const port = process.env.PORT;


import connectdb from "./config/connectDb.js";
import userRoutes from "./routes/userRoutes.js"
import adminRoute from "./routes/adminRoute.js";
import agentRoute from "./routes/agentRoute.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())
app.get("/", (req,res) => {
    res.send("Hey it is working")
})

connectdb()

app.use("/student",userRoutes)
app.use("/agent",agentRoute)
app.use("/admin",adminRoute)

app.listen(port, (req,res) => {
    try {
        console.log(`Server is listening at port ${port}`)
    } catch (error) {
        console.log(error)
    }
})