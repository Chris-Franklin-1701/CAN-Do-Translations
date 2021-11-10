const router = require('express').Router();
const { Translation } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newTranslation = await Translation.create({
        ...req.body,
        user_id: req.session.user_id,
        });
        
        res.status(200).json(newTranslation);
    } catch (err) {
        res.status(400).json(err);
    }
});