const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fullAccessRoutes = require('./fullAccessRoutes');
const basicAccessRoutes = require('./basicAccessRoutes')

router.use('/users', userRoutes);
router.use('/full', fullAccessRoutes);
router.use('/basic', basicAccessRoutes)

module.exports = router;