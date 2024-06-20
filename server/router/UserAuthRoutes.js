const {Router} = require('express');
const { register,login, verifyUser} = require('../controllers/authControllers');
const router = Router();
const authMiddleware = require('../middleware/authMiddleware')

/* POST Methods */

router.route('/register').post(register) // register user
router.route('/login').post(login) // login user

/* GET Methods */
router.route('/verify').get(authMiddleware,verifyUser) // authenicate user


module.exports = router