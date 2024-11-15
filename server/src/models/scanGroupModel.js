import mongoose from "mongoose"

const scanGroupSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    totalScanCycle: {
        type: Number,
        required: true
    },
    fieldLocation: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Scangroup = mongoose.model("Scangroup", scanGroupSchema)
export default Scangroup;