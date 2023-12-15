const router = require('express').Router();

const userController = require('../../controllers/user.controller');
const { checkAdmin, checkToken } = require('../../helpers/middlewares');

router.get('/', userController.getAllUsers );
router.get('/usersLogged',checkToken, userController.getUserLogged );
router.post('/login', userController.userLogin );



module.exports = router;