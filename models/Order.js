const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    totalCost: {type: Number, required: true},
    discount: {type: Number},
    discountedAmount: {type: Number},
    tax: {type: Number},
    taxableAmount: {type: Number},
    amountToPay: {type: Number, required: true},
    paymentStatus: {type: String},
    shippingStatus: {type: String},
    shipToAddress: {type: String},
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);
