const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    price:{
        type: Number,
    },
    stock:{
        type: Number,
    },
    productid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', //reference to Product Model/Schema ID
    },
});

module.exports = mongoose.model('Detail', DetailSchema);