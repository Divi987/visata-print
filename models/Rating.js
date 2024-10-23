const {mongoose, Schema} = require('mongoose');

const RatingSchema = new Schema({
    userId: {type: String, required: true},
    rating: {type: Number, required: true},
    productId: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
});

module.exports = mongoose.models.Rating || mongoose.model('Rating', RatingSchema);
