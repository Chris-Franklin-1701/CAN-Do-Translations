const router = require('express').Router();
const { Language } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newLanguage = await Language.create({
        ...req.body,
        user_id: req.session.user_id,
        });
        
        res.status(200).json(newLanguage);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;