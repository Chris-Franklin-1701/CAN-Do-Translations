const User = require('./user');
const Comments = require('./comments');

User.hasMany(Comments);

Comments.belongsTo(User);

module.exports = {
    User,
    Comments,
};