import { Schema, model } from "mongoose";

const productSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "review",
            required: true
        }
    ]
}, {
    timestamps: true
});

export default model("Product", productSchema);