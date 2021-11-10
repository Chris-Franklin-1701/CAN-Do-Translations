const router = require('express').Router();
const { Comments, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try{
        const commentData = await Comments.findByPk(req.params.id, {
            include: [
                {
                    model: Comments, attributes: ['user_id', 'comment', 'date_created'],
                    include: [{model: User, attributes: ['name']}],
                },
                {
                    model: User, attributes: ['name']
                },
            ],
        });
        const currentComment = commentData.get({ plain: true });
        res.render('homepage', { currentComment, logged_in: req.session.logged_in});
    }catch (err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
    const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
        comment: req.body.comment,
        pig_latin: req.body.pig_latin,
        pirate: req.body.pirate,
        word_vomit: req.body.word_vomit,
        braille: req.body.braille,
        hodor: req.body.hodor,
        poemify: req.body.poemify,
    });
    //res.redirect('./dashboard');

    res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
    const commentUpdate = await Comments.update({
        ...req.body,
        comment: req.body.comment,
    },
    {
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(commentUpdate);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
    const commentDelete = await Comments.destroy({
        where: {
            id: req.params.id,
        },
    });

    if (!commentDelete) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
    }

    res.status(200).json(commentDelete);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
