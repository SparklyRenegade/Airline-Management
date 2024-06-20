const User = require('../model/User.model')
const Flight = require('../model/Flight.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config()

const register = async (req, res) => {
    const { username, email, password, firstName, lastName, address, mobile } = req.body;

    try {
        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email is already taken' });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'This Username is already taken.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword, firstName, lastName, mobile, address });
        await newUser.save();

        res.status(201).json({ status: 'ok', message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'No such user exist.' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id, username: user.username,email:user.email }, process.env.JWT_SECRET, { expiresIn: '12h' });

        res.status(200).json({ status: 'ok', user: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const verifyUser = async (req,res) => {
    res.status(200).json({status : 'ok',username : req.user.username,email:req.user.email})
}


module.exports = { login, register,verifyUser }


