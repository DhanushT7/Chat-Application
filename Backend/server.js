import express from "express";
import dotenv from "dotenv"
import connectDb from "./config/db"

const app = express();
dotenv.config();
connectDb()

app.get("/", (req, res)=>{
  res.send("API is running");
});

app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});