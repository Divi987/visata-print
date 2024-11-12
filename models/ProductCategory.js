const {mongoose, Schema} = require('mongoose');

const ProductCategorySchema = new mongoose.Schema({
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
    orderId: {type: Schema.Types.ObjectId, ref: 'Order'},
}, {timestamps: true});

module.exports = mongoose.models.ProductCategory || mongoose.model('ProductCategory', ProductCategorySchema);
