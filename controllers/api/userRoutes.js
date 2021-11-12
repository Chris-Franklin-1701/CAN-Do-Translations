const router = require('express').Router();
const { User } = require('../../models');

// The post route in which we create a new user into our database
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.name = dbUserData.name,
                req.session.email = dbUserData.email,
                req.session.password = dbUserData.password,
                req.session.user_id = dbUserData.id,
                req.session.logged_in = true;

            res.redirect('/dashboard');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// The post route in which a previously authenticated user can return to our site
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.name = userData.name;//added this line AC
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// The post route in which an authenticated user can logout of our site
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;