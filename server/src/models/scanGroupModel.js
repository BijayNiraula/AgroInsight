import mongoose from "mongoose";

const scanGroupSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    totalScanCycle: {
      type: Number,
    },
    fieldLocation: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Scangroup = mongoose.model("Scangroup", scanGroupSchema);
export default Scangroup;
