const router = require('express').Router();
const userRoutes = require('./userRoutes');
const languageRoutes = require('./languageRoutes');
const randoRoutes = require('./randoRoutes');
const textRoutes = require('./textRoutes');
const translationRoutes = require('./translationRoutes');

router.use('/users', userRoutes);
router.use('/languages', languageRoutes);
router.use('/randos', randoRoutes);
router.use('/texts', textRoutes);
router.use('translations', translationRoutes);

module.exports = router;
