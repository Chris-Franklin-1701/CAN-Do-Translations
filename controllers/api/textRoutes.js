const router = require('express').Router();
const { Text } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
    const newText = await Text.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.redirect('./homepage');

    res.status(200).json(newText);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
    const textUpdate = await Text.update({
        ...req.body,
        user_id: req.session.user_id,
    },
    {
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(textUpdate);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
    const textDelete = await Text.destroy({
        where: {
            id: req.params.id,
        },
    });

    if (!textDelete) {
        res.status(404).json({ message: 'No text found with this id!' });
        return;
    }

    res.status(200).json(textDelete);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;