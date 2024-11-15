//routes folder is responsible for defining the routes

import express from "express";
import UserController from "../controller/user.controller.js";
const userRouter = express.Router();
userRouter.route("/analyze").post(UserController.analyzeVideo);

export default userRouter;
