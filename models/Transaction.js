const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    invoiceId: {type: Schema.Types.ObjectId, ref: 'Invoice'},
    orderId: {type: Schema.Types.ObjectId, ref: 'Order'},
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    systemRef: {type: String},
    gatewayRef: {type: String},
    amount: {type: Number},
    currency: {type: String},
    discountType: {type: String},
    discount: {type: Number},
    isDiscounted: {type: Boolean, default: false},
    status: {type: String},
    gatewayTxnStatus: {type: String},
    gatewayResponseCode: {type: String},
}, {timestamps: true});

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
