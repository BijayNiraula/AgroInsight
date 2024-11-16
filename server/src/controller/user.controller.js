import errorThrower from "../helper/errorThrower.js";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(process.env.ML_URL);
class UserController {
  async analyzeVideo(req, res, next) {
    console.log("Running video analysis...");
    try {
      const { fieldName, scanDate } = req.body;

      // Validate input fields
      if (!fieldName || !scanDate) {
        throw errorThrower(400, "Please provide all required fields.");
      }

      // Validate uploaded file
      if (!req.file || !req.file.path) {
        throw errorThrower(400, "No video file uploaded.");
      }

      const formData = new FormData();
      formData.append(
        "video",
        fs.createReadStream(req.file.path), // Stream the uploaded video to Flask
        req.file.filename
      );

      // Send the video to the Flask API
      const response = await axios({
        method: "post",
        url: process.env.ML_URL + "/upload", // Flask API endpoint
        data: formData,
        responseType: "json", // Expect JSON response from Flask
        headers: {
          ...formData.getHeaders(),
        },
      });

      return res.status(200).json({
        message: "Video processed successfully.",
        annotated_video_url: response.data.annotated_video_url, // Return the URL
      });
    } catch (error) {
      console.error("Error during video analysis:", error);
      next(error);
    }
  }
}

export default new UserController();
