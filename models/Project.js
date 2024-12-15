const {mongoose, Schema} = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    json: {type: Object},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    thumbnailUrl: {type: String},
    isTemplate: {type: Boolean},
    isPro: {type: Boolean},
    productId: {type: Schema.Types.ObjectId, ref: 'Product'}
}, {timestamps: true});

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
