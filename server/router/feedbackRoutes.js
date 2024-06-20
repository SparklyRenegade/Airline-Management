// backend/routes/feedbackRoutes.js
const express = require('express');
const router = express.Router();
const { addFeedback, getAllFeedback } = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/addFeedback').post(addFeedback);
router.route('/getAllFeedback').get(authMiddleware, getAllFeedback);

module.exports = router;
