const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    title: {
        type:String,
        maxlength: 50,
        required: true

    },
    price: {
        type: Number,
        minglength: 1,
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    description: {
        type: String,
        lowercase: true,
        required: true
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


const Product = mongoose.model('Product', productSchema);

module.exports = { Product }