const mongoose = require('mongoose')
const validator = require('validator');
const FlightModel = require('./Flight.model');

const PaymentSchema = new mongoose.Schema({
    user : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    flight:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Flight"
    }],
    razorpay_order_id:{
        type:String,
        required:true
    }, 
    razorpay_payment_id:{
        type:String,
        required:true
    }, 
    razorpay_signature:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('Payment' ,PaymentSchema)