const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    promotion: {type: Schema.Types.ObjectId, ref: 'Promotion'},
    discount: {type: Number},
    discountedPrice: {type: Number},
    colors: {type: String},
    features: {type: String},
    FAQs: [{type: mongoose.ObjectId, ref: 'FAQ'}],
    numberOfRaters: {type: Number},
    image: {type: String},
    video: {type: String},
    isBestSeller: {type: Boolean, default: false},
    isNewArrival: {type: Boolean, default: false},
    isCompanyMade: {type: Boolean, default: false},
    rating: {type: mongoose.ObjectId, ref: 'Rating'},
    averageRating: {type: Number},
});
