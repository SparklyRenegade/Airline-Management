// backend/controllers/flights.js
const User = require('../model/User.model');
const Flight = require('../model/Flight.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const adminCredentials = {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
};

const adminLogin = async (req, res) => {
    const { username, password } = req.body;

    if (username === adminCredentials.email && password === adminCredentials.password) {
        const token = jwt.sign({ email: adminCredentials.email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '12h' });
        return res.status(200).json({ status: 'ok', user: token });
    } else {
        return res.status(401).json({ message: 'Invalid admin credentials' });
    }
};

async function getAllFlights(req, res) {
    try {
        if (req.user.role !== 'admin') {
            return res.status(400).json({ message: "Not Authorized" });
        }

        const flights = await Flight.find();

        return res.status(200).json({ flights });

    } catch (error) {
        return res.status(400).json({ message: "Not Authorized" });
    }
}

async function addFlight(req, res) {
    const { flightNo, to, from, category, totalSeats, date, departureTime, arrivalTime, airline } = req.body;
    const date_ = new Date(date);
    try {
        if (req.user.role !== 'admin') {
            return res.status(400).json({ message: "Not Authorized" });
        }
        const flight = new Flight({ flightNo, to, from, category, totalSeats, date: date_, departureTime, arrivalTime, airline });
        await flight.save();

        return res.status(200).json({ status: 'ok', message: `New Flight created with flightNo- ${flightNo}` });

    } catch (error) {
        const errorcode = error['errorResponse'];
        if (errorcode && errorcode['code'] === 11000) {
            return res.status(400).json({ message: "This Flight number Already Exists" });
        }
        console.log(error);
        const errormessage = "Cannot add flight Now. Try again later.";
        return res.status(500).json({ message: errormessage });
    }
}

async function editFlight(req, res) {
    const { id } = req.params;
    const { flightNo, to, from, category, totalSeats, date, departureTime, arrivalTime, airline } = req.body;

    try {
        if (req.user.role != 'admin') {
            return res.status(400).json({ message: "Not Authorized" });
        }
        const flight = await Flight.findById(id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }

        if (flightNo) flight.flightNo = flightNo;
        if (to) flight.to = to;
        if (from) flight.from = from;
        if (category) flight.category = category;
        if (totalSeats) flight.totalSeats = totalSeats;
        if (date) flight.date = new Date(date);
        if (departureTime) flight.departureTime = departureTime;
        if (arrivalTime) flight.arrivalTime = arrivalTime;
        if (airline) flight.airline = airline;

        await flight.save();

        return res.status(200).json({ status: 'ok', message: `Flight with flightNo- ${flightNo} updated successfully` });

    } catch (error) {
        return res.status(500).json({ message: "Cannot update flight now. Try again later." });
    }
}

async function deleteFlight(req, res) {
    const { id } = req.params;

    try {
        if (req.user.role != 'admin') {
            return res.status(400).json({ message: "Not Authorized" });
        }
        const flight = await Flight.findByIdAndDelete(id);

        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        const flights = await Flight.find();
        return res.status(200).json({ status: 'ok', message: `Flight with flightNo- ${flight.flightNo} deleted successfully`, flights });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Cannot delete flight now. Try again later." });
    }
}

module.exports = {
    addFlight,
    editFlight,
    deleteFlight,
    adminLogin,
    getAllFlights
};
