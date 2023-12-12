const router = require('express').Router();

const userController = require('../../controllers/user.controller');
const { checkAdmin } = require('../../helpers/middlewares');

router.get('/', userController.getAllUsers );
router.post('/login', userController.userLogin );



module.exports = router;