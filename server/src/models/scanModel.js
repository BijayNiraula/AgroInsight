import mongoose from "mongoose"

const scanSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    detectedDisease: {
        type: String,
        required: true
    },
    detectedPests: {
        type: String,
        required: true
    },
    scanCycle: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Scan = mongoose.model("Scan", scanSchema)
export default Scan;