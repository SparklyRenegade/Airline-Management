const User = require('../model/User.model');
const Flight = require('../model/Flight.model');


async function getUserDetails(req, res) {
    const username = req.user.username;

    try {
        const user = await User.findOne({ username }).select('firstName lastName mobile address username email');
        if (!user) {
            return res.status(400).json({ message: "Not authorized" });
        }
        return res.status(200).json({ status: "ok", user });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

async function updateUserDetails(req, res) {
    const username = req.user.username;
    const { firstName, lastName, address, mobile } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "Not authorized" });
        }
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        if (mobile) user.mobile = mobile;
        if (address) user.address = address;

        await user.save();

        return res.status(201).json({ status: "ok", user, message: "User Details updated." });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

async function searchFlight(req, res) {
    const { to, from, date, category } = req.body;

    try {
        let searchCriteria = {};
        if (to) searchCriteria.to = to;
        if (from) searchCriteria.from = from;
        if (category) searchCriteria.category = category;
        if (date) searchCriteria.date = new Date(date);

        // Find flights matching the criteria
        const flights = await Flight.find(searchCriteria).select('flightNo to from category date time totalSeats');

        if (flights.length === 0) {
            return res.status(404).json({ message: 'No flights found matching the criteria' });
        }

        res.status(200).json({
            message: 'Flights retrieved successfully',
            flights
        });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

const bookFlight = async (req, res) => {
    const username = req.user.username;
    const { flightNo } = req.body;

    try {
        if (username) {
            const flight = await Flight.findOne({ flightNo });
            if (flight) {
                const user = await User.findOne({ username });

                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                if (user.flights.includes(flight._id)) {
                    return res.status(400).json({ message: 'You have already booked this flight' });
                }

                user.flights.push(flight._id);
                await user.save();

                flight.totalSeats -= 1;
                await flight.save();

                return res.status(200).send({ message: `Booking Successful!` });
            } else {
                return res.status(400).send({ message: `No flight exist with no - ${flightNo}` });
            }
        } else {
            return res.status(400).send({ message: "Not Authorized!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Please try again later." });
    }
}

const alreadybooked = async (req, res) => {
    const username = req.user.username;
    const { flightNo } = req.body;

    try {
        if (username) {
            const flight = await Flight.findOne({ flightNo });
            if (flight) {
                const user = await User.findOne({ username });

                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                if (user.flights.includes(flight._id)) {
                    return res.status(200).json({ canbook: false, message: 'You have already booked this flight' });
                }
                return res.status(200).json({ canbook: true });
            } else {
                return res.status(400).send({ message: `No flight exist with no - ${flightNo}` });
            }
        } else {
            return res.status(400).send({ message: "Not Authorized!" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Please try again later." });
    }
}

const getBookedFlights = async (req, res) => {
    const username = req.user.username;
    // console.log(username);

    try {
        // Find the user and populate the flights array
        const user = await User.findOne({ username }).populate('flights');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'Flights retrieved successfully',
            flights: user.flights
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    bookFlight,
    getBookedFlights,
    getUserDetails,
    updateUserDetails,
    searchFlight,
    alreadybooked
};
