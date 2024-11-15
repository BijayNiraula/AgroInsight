import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "PUT,GET,POST,DELETE",
  credentials: true,
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;
