import mongoose from "mongoose";

const scanSchema = new mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    detectedDisease: {
      type: JSON,
    },
    detectedPests: {
      type: JSON,
    },
    annotedVideo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Scan = mongoose.model("Scan", scanSchema);
export default Scan;
