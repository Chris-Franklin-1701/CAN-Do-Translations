const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const basicAccessRoutes = require('./basicAccessRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/basic', basicAccessRoutes)


module.exports = router;
