const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    total: {
        type: double,
        required: true,
    },
    address: {
        type: address,
        required: true,
    },
    phone: {
        type: phone,
        required: true,
    },
    customerID: {
        type: int,
        required: true,
    },
    deliveryDate: {
        type: date,
        required: true,
    },
    deliveryStatus: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;