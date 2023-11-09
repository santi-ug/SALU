import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    customerID: {
        type: Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true
    }
}, {
    timestamps: true
});

export default model("Review", reviewSchema);