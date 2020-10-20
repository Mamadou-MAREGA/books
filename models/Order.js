const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    totalPrice: {
        type: Number,
        required: [true, 'Please enter the totalPrice']
    },
    paid: {
        type: Boolean,
        default: false
    },
    items:[{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'product'
    }],
    dateOrder: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'user'
    }

});


module.exports = mongoose.model('order', OrderSchema );
