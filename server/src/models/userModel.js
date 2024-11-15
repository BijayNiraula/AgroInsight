import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        required: false
    },
    otpGeneratedAt: {
        type: Date,
        required: false
    }
    }, {
        timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User;