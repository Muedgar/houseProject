const mongoose = require("mongoose");

const paymentModel = new mongoose.Schema({
    merchant: {
        type: String,
        required: true
    },
    tenant: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const payment = mongoose.model('payment',paymentModel);

module.exports = payment;
