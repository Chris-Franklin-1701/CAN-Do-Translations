const router = require('express').Router();
const { Comments, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('dashboard', {
            users,
            // Pass the logged in flag to the template
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.post('/login', (req, res) => {
//     // If a session exists, redirect the request to the homepage
//     if (req.session.logged_in) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const commentUpdate = await Comments.update({
//             ...req.body,
//             comment: req.body.comment,
//         },
//             {
//                 where: {
//                     id: req.params.id
//                 }
//             });

//         res.status(200).json(commentUpdate);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.delete('/:id', async (req, res) => {
//     try {
//         const commentDelete = await Comments.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (!commentDelete) {
//             res.status(404).json({ message: 'No post found with this id!' });
//             return;
//         }

//         res.status(200).json(commentDelete);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;