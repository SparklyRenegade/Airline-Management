// backend/routes/admin.js
const express = require('express');
const router = express.Router();
const { adminLogin,addFlight, editFlight,deleteFlight, getAllFlights } = require('../controllers/adminControllers');


router.route('/getallflights').get(getAllFlights);
/* POST Methods */
router.route('/login').post(adminLogin);
router.route('/addflight').post(addFlight);

/**PUT Methods */
router.route('/updateFlight/:id').put(editFlight);

/* DELETE Methods */
router.route('/deleteFlight/:id').delete(deleteFlight);

module.exports = router;
