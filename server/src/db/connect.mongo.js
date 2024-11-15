import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("database connection successfull");
  } catch (e) {
    console.error(e);
    console.log("database connection failed");
  }
};

export default connectDb;
