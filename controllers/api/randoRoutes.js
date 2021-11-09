const router = require('express').Router();
const { Rando } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newRando = await Rando.create({
        ...req.body,
        user_id: req.session.user_id,
        });
        
        res.status(200).json(newRando);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;