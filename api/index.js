import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js"; 
import userRouter from "./routes/user.js"; 
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(3100, () => {

   
    console.log("Server is running on port 3000");
})