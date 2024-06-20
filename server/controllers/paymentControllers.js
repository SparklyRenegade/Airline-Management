const dotenv = require("dotenv");
dotenv.config();
const Razorpay = require('razorpay')
const crypto = require('crypto');
const User = require('../model/User.model');
const Flight = require('../model/Flight.model');
const Payment = require('../model/Payment.model');

const instance = new Razorpay({
    key_id: process.env.RAZOR_KEY,
    key_secret: process.env.RAZOR_SECRET,
});

const sendkey = async (req, res) => {
    return res.status(200).json({ key: process.env.RAZOR_KEY })
}

const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        }

        const order = await instance.orders.create(options)
        return res.status(200).json({
            success: true,
            order
        })

    } catch (error) {

    }
}

const  paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body.response;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZOR_SECRET)
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Database comes here
            const username = req.user.username
            const {flightNo} = req.body
            const user = await User.findOne({ username });
            const flight = await Flight.findOne({ flightNo });

            user.flights.push(flight._id);
            await user.save();
            
            const newPayment = new Payment({ user,flight,razorpay_order_id, razorpay_payment_id, razorpay_signature });
            await newPayment.save();

            console.log(newPayment);

            res.status(200).json({
                success: true,
                user:req.user
            })
            // res.redirect(
            //     `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
            // );
        }
        else {
            res.status(400).json({
                success: false,
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error })
    }
}


module.exports = { checkout, sendkey, paymentVerification }