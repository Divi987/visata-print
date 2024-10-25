const {mongoose, Schema} = require('mongoose');

const ProductSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    promotion: {type: Schema.Types.ObjectId, ref: 'Promotion'},
    discount: {type: Number},
    discountedPrice: {type: Number},
    colors: [{type: String}],
    features: {type: String},
    FAQs: [{type: mongoose.ObjectId, ref: 'FAQ'}],
    numberOfRaters: {type: Number},
    image: {type: String},
    video: {type: String},
    isBestSeller: {type: Boolean, default: false},
    isNewArrival: {type: Boolean, default: false},
    isCompanyMade: {type: Boolean, default: false},
    rating: [{type: mongoose.ObjectId, ref: 'Rating'}],
    averageRating: {type: Number},
    slug: {type: String, unique: true},
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
