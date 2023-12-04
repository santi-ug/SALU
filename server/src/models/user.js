import { ObjectId, Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    cart: {
        type: Array,
        default: []
    },
    address: [{type: ObjectId, ref: "Address"}],
    // orders: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "order",
    //         required: true
    //     }
    // ],
    // reviews: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "review",
    //         required: true
    //     }
    // ]
}, {
    timestamps: true
});

export default model("User", userSchema);
