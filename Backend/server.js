import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import user from "./Models/userModel.js"

const app = express();
app.use(express.json());
app.use(cors({
  origin : "http://localhost:5173",
  credentials: true, 
}));

dotenv.config();
connectDb()

app.get("/", (req, res)=>{
  res.send("API is running");
});

app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});