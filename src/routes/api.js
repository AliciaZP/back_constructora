const router = require('express').Router();

router.use('/admin', require('./api/admin'));
router.use('/operario', require('./api/operario'));
router.use('/obra', require('./api/obra'));



module.exports = router;