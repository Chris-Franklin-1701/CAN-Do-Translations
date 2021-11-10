const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const translationsRoutes = require('./translationsRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('translations', translationsRoutes);

module.exports = router;
