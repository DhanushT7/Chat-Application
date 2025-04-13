import express from "express"

const userRoutes = express.Router();

userRoutes.post("/create/group", createGroup)