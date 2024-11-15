import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/connect.mongo.js";
import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import corsMiddleware from "./middleware/cors.middleware.js";
import errorHandlerMiddleware from "./middleware/errorHandler.middleware.js";
import authRouter from "./routes/auth.router.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();

// Apply middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(corsMiddleware);

// Route definitions
app.use("/api/auth", authRouter);

// Error handler middleware
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    connectDb();
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
