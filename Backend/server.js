import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import encrypt from "./passwordManager/encryption.js"
import decrypt from "./passwordManager/decryption.js"
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
  let {email, password} = req.body;

  try{

    const hashedPassword = await encrypt(password);
    const result = await user.create({email : email, password : hashedPassword});
    res.status(200).json({message:"success"});

  }catch(error){

    if(error.code == 11000 && error.keyValue.email ){
      return res.status(500).json({message:"email already exists!"});
    }

    res.status(500).json({message:"Some issue in creating account!"});
  }
  return;
});

app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});