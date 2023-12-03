import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    total: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    deliveryDate: {
        type: Date,
        required: true,
    },
    deliveryStatus: {
        type: Boolean,
        required: true
    },
    customerID: {
        type: Schema.Types.ObjectId,
        ref: "customer",
        required: true
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true
        }
    ]
}, {
    timestamps: true
});

export default model("Order", orderSchema);