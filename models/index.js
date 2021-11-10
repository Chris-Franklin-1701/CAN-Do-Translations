const User = require('./user');
const Comments = require('./comments');
const Translations = require('./translations');

User.hasMany(Comments);

Comments.belongsTo(User);

Comments.hasMany(Translations);

Translations.belongsTo(Comments);

module.exports = {
    User,
    Comments,
    Translations,
};