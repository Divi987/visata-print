const mongoose = require('mongoose')

const ProductCategorySchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        image: {type: String},
        video: {type: String},
        parentId: {type: String},
        level: {type: Number},
        slug: {type: String},
        path: {type: String},
        isFeatured: {type: Boolean, default: false},
        isTopPick: {type: Boolean, default: false},

    }, {timestamps: true});

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
