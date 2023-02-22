const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category:{
        type:String,
    },
    name:{
        type: String,
    },
    brand:{
        type:String,
    },
    description:{
        type: String,
    },
    picture:{
        type: String,
    },

});

module.exports = mongoose.model('Product', ProductSchema);