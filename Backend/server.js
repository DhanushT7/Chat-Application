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

app.post("/api/signup", async (req, res)=>{
  const {email, password} = req.body;

  try{
    const result = await user.create(req.body);
    res.status(200).json({message:"success"});
  }catch(error){
    console.log(error.message);
    res.status(500).json({message:"failed"});
  }
  return;
});

app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});