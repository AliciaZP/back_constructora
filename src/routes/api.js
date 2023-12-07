const { checkAdmin, checkToken } = require('../helpers/middlewares');

const router = require('express').Router();

router.use('/admins',checkToken , require('./api/admins'));
router.use('/workers',checkToken ,require('./api/workers'));
router.use('/constructions',checkToken , require('./api/constructions'));
router.use('/users', require('./api/users'));
router.use('/reports',checkToken , require('./api/reports'));
router.use('/tasks', require('./api/tasks'));



module.exports = router;