const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema(
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
            promotion: [{type: Schema.Types.ObjectId, ref: 'Promotion'}],
            FAQs: [{type: mongoose.ObjectId, ref: 'FAQ'}],

    }, {timestamps: true});

module.exports = mongoose.model('Category', CategorySchema);
