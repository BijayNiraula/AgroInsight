import errorThrower from "../helper/errorThrower.js";
import axios from "axios";
import FormData from "form-data";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import dotenv from "dotenv";
import Scangroup from "../models/scanGroupModel.js";
import Scan from "../models/scanModel.js";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(process.env.ML_URL);
class UserController {
  async analyzeVideo(req, res, next) {
    console.log("Running video analysis...");
    try {
      const { fieldName } = req.body;

      // Validate input fields
      if (!fieldName) {
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
      console.log(response.data.detectionData);
      console.log(response.data.annotated_video_url);
      const alreadyExist = await Scangroup.findOne({ title: fieldName }); // Correct query syntax

      if (alreadyExist) {
        // If Scangroup exists, create a Scan record and associate with the existing group
        const result = await Scan.create({
          groupId: alreadyExist._id, // Use the existing group ID
          detectedDisease: {
            ...response.data.detectionData,
            annotedVideo: response.data.annotated_video_url,
          }, // Save the detection data
        });

        console.log("Scan created successfully with existing group:", result);
      } else {
        // If Scangroup doesn't exist, create a new Scangroup and then associate Scan with it
        const newGroup = await Scangroup.create({
          title: fieldName, // Field name for the new group
        });

        console.log("New Scangroup created:", newGroup);

        // Now, create a new Scan entry with the new groupId
        const newScan = await Scan.create({
          groupId: newGroup._id, // Use the new group ID
          detectedDisease: {
            ...response.data.detectionData,
            annotedVideo: response.data.annotated_video_url,
          }, // Save the detection data
        });
      }

      return res.status(200).json({
        message: "Video processed successfully.",
        data: response.data, // Return the URL
      });
    } catch (error) {
      console.error("Error during video analysis:", error);
      next(error);
    }
  }

  async getUserData(req, res, next) {
    try {
      const group = await Scangroup.find();
      const scan = await Scan.find();
      res.send({
        scans: scan,
        scanGroup: group,
      });
    } catch (error) {
      console.error("Error during video analysis:", error);
      next(error);
    }
  }
}

export default new UserController();
