const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
  // expects {username: 'user1', email: 'user1@gmail.com', password: '1234'}
  User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
  })
      .then(dbUserData => {

<<<<<<< HEAD
          res.json(dbUserData);
=======
    req.session.save(() => {
      req.session.name = dbUserData.name,
      req.session.email = dbUserData.email,
      req.session.password = dbUserData.password,
      req.session.loggedIn = true;
>>>>>>> 43cf225006855fa57059034195f1255ff147aef0

      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
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