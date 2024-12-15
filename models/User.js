const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String, unique: true, required: true},
    phoneNo: {type: String},
    password: {type: String, required: true},
    address: {type: String},
    createdBy: {type: String},
    updatedBy: {type: String},
    deletedBy: {type: String},
    cart: [{type: mongoose.ObjectId, ref: 'Product'}],
    wishlist: [{type: mongoose.ObjectId, ref: 'Product'}],
    purchasedProducts: [{type: mongoose.ObjectId, ref: 'Product'}],
    recentlyViewedProducts: [{type: mongoose.ObjectId, ref: 'Product'}],
    rating: {type: mongoose.ObjectId, ref: 'Rating'},
    averageRating: {type: Number},
}, {timestamps: true});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
