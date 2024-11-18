import express from "express";
import UserController from "../controller/user.controller.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const userRouter = express.Router();

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use path.join with __dirname for a proper absolute path
    cb(null, path.join(__dirname, "../files/uploads")); // Save files in the 'files/uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // Save with the original filename
  },
});

const upload = multer({ storage });

// Route definition
userRouter.post(
  "/analyzeVideo",
  upload.single("video"), // Pass upload middleware here
  UserController.analyzeVideo
);

userRouter.post("/getUserData", UserController.getUserData);

export default userRouter;
