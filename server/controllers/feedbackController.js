// backend/controllers/feedbackController.js
const Feedback = require('../model/Feedback.model');

const addFeedback = async (req, res) => {
    const { user, email, subject, message } = req.body;
    const date = Date.now();
    try {
        const feedback = new Feedback({ user, email, subject, message,date });
        await feedback.save();
        return res.status(200).json({ status: 'ok', message: 'Feedback sent successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Cannot send feedback now. Try again later.' });
    }
};

const getAllFeedback = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(400).json({ message: 'Not Authorized' });
        }
        const feedbacks = await Feedback.find();
        return res.status(200).json({ feedbacks });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Cannot retrieve feedbacks now. Try again later.' });
    }
};

module.exports = {
    addFeedback,
    getAllFeedback
};
