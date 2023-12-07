import { ObjectId, Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
    },
    // ratings: [
    //     {
    //         star: Number,
    //         postedBy: {type: ObjectId, ref: "User"}
    //     }
    // ],
}, {
    timestamps: true
});

export default model("Product", productSchema);