import { Schema, model } from "mongoose";

const shoppingcartSchema = new Schema({
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

export default model("ShoppingCart", shoppingcartSchema);