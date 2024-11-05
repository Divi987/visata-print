const {mongoose, Schema} = require('mongoose')
import { FileSchema } from '@/models/File';

const CategorySchema = new mongoose.Schema(
    {
            name: {type: String, required: true},
            description: {type: String},
            image: {type: FileSchema},
            video: {type: FileSchema},
            parentId: {type: String},
            level: {type: Number},
            slug: {type: String, unique: true, required: true},
            path: {type: String},
            isFeatured: {type: Boolean, default: false},
            isTopPick: {type: Boolean, default: false},
            promotion: [{type: Schema.Types.ObjectId, ref: 'Promotion'}],
            FAQs: [{type: mongoose.ObjectId, ref: 'FAQ'}],

    }, {timestamps: true});

module.exports = mongoose.models.Category|| mongoose.model('Category', CategorySchema);
