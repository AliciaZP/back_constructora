const { checkAdmin, checkToken } = require('../helpers/middlewares');

const router = require('express').Router();

router.use('/admins', require('./api/admins'));
router.use('/workers', require('./api/workers'));
router.use('/constructions', require('./api/constructions'));
router.use('/users', require('./api/users'));
router.use('/reports', require('./api/reports'));
router.use('/tasks', require('./api/tasks'));



module.exports = router;