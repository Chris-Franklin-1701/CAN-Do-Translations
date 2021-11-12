const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// The get route for an authenticated user to view their dashboard
// Should an unauthenticated user attempt to view the dashboard, they will be redirected to the login page where they can either sign up or create an account
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('dashboard', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;