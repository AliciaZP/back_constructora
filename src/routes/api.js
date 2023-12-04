const router = require('express').Router();

router.use('/admins', require('./api/admin'));
router.use('/workers', require('./api/workers'));
router.use('/constructions', require('./api/constructions'));



module.exports = router;