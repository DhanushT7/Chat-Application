import express from "express";

const app = express();

app.get("/", (req, res)=>{
  res.send("server is ready");
});

app.listen(5001, ()=>{
  console.log("server started: http://localhost:5001");
});