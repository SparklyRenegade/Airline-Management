const express = require('express');
const { checkout,sendkey,paymentVerification } = require('../controllers/paymentControllers');
const router = express.Router();

router.route('/checkout').post(checkout);
router.route('/paymentverification').post(paymentVerification);
router.route('/getkey').get(sendkey);

module.exports = router;