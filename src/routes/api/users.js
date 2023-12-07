const router = require('express').Router();

const userController = require('../../controllers/user.controller');
const { checkAdmin } = require('../../helpers/middlewares');

router.post('/login', userController.userLogin ),
router.get('/',checkAdmin, userController.getAllUsers )



module.exports = router;