const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize
    })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

=======
const sess = {
secret: 'Top Secret',
cookie: {},
resave: false,
saveUninitialized: true,
store: new SequelizeStore({
    db: sequelize,
}),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

>>>>>>> 909d4c7ad6e0a1170b4bd86d7d9550e6a88ee22e
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
    app.listen(PORT, () => console.log('Now listening'));
=======
app.listen(PORT, () => console.log('Now listening'));
>>>>>>> 909d4c7ad6e0a1170b4bd86d7d9550e6a88ee22e
});
