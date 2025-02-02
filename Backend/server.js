import express from "express";

const app = express();

app.get("/", (req, res)=>{
  res.send();
});

app.listen(5000, ()=>{
  console.log("server started: http://localhost:5000");
});