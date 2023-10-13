const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    updateDate: Date,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],  // assuming you have a separate SelectedProducts model
    status: String,
    total: Number
});

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema);
