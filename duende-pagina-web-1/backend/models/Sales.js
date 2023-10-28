const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url: String,
    altText: String,
    });

const locationSchema = new mongoose.Schema({
    provincia: String,
    canton: String,
    distrito: String,
    details: String,
    });

const saleSchema = new mongoose.Schema({
    orderNum : String,
    userBuyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    date : { type: Date, default: Date.now },
    deliverDate: Date,
    deliver: String,
    location : locationSchema,
    sinpe: imageSchema,
    tax: Number,
    total: Number,
    status: {type: Boolean, default: true},
    actualBuyerName: String,
    actualBuyerPhone: String,
    actualBuyerEmail: String,
    });

module.exports = mongoose.model('Sale', saleSchema,'sale');
