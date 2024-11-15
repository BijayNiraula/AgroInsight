//routes folder is responsible for defining the routes

import express from "express";

import AuthController from "../controller/auth.controller.js";
const authRouter = express.Router();
authRouter.route("/login").post(AuthController.login);

export default authRouter;
