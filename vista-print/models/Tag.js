const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String},
        isFeatured: {type: Boolean, default: false},
    }, {timestamps: true});

module.exports = mongoose.models.Tag|| mongoose.model('Tag', TagSchema);
