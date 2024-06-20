// backend/model/Flight.model.js
const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema({
    flightNo: {
        type: String,
        required: [true, "Please provide a flight number"],
        unique: [true, "This Flight number Already Exists"]
    },
    from: {
        type: String,
        required: [true, "Please provide origin."],
    },
    to: {
        type: String,
        required: [true, "Please provide destination."],
    },
    category: {
        type: String,
    },
    totalSeats: { 
        type: Number, 
        required: [true, "Please provide total number of Seats."] 
    },
    date: { 
        type: Date 
    },
    price: { 
        type: Number 
    },
    departureTime: {
        type: String
    },
    arrivalTime: {
        type: String
    },
    airline: {
        type: String
    }
});

module.exports = mongoose.model('Flight', FlightSchema);
