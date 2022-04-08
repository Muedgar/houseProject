const mongoose = require("mongoose");

const houseModel = new mongoose.Schema({
    contact1: {
        type: String,
        required: true
    },
    contact2: {
        type: String,
        required: true
    },
    contact3: {
        type: String,
        required: true
    }, 
    costpermonth: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    image3: {
        type: String,
        required: true
    },
    image4: {
        type: String,
        required: true
    },
    image5: {
        type: String,
        required: true
    },
    image6: {
        type: String,
        required: true
    },
    image7: {
        type: String,
        required: true
    },
    image8: {
        type: String,
        required: true
    },
    image9: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ownercontact: {
        type: String,
        required: true
    },
    rentalfacts: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

const houses = mongoose.model('houses',houseModel);

module.exports = houses;


