const mongoose = require('mongoose')

const PromotionSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        discountType: {type: String},
        discount: {type: Number},
    }, {timestamps: true});

module.exports = mongoose.models.Promotion || mongoose.model('Promotion', PromotionSchema);
