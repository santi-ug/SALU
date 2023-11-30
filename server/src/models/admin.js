import { Schema, model } from "mongoose";

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

export default model("Admin", adminSchema);