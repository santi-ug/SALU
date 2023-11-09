import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    shoppingCart: {
        type: Schema.Types.ObjectId,
        ref: "shoppingcart",
        required: true
    },
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "order",
            required: true
        }
    ],
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

export default model("Customer", customerSchema);
