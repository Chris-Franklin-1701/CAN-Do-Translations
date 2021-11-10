const User = require('./user');
const Comments = require('./comments');

<<<<<<< HEAD
User.hasMany(Text, {
    foreignKey: 'user_id',
});
=======
User.hasMany(Comments);
>>>>>>> 657d0abaf4f6bf31258bf5f05c96ba991154c97e

Comments.belongsTo(User);

<<<<<<< HEAD
Comments.hasMany(Translations);

<<<<<<< HEAD
Text.hasOne(Language, {
    foreignKey: 'lang_id'
});

Translation.hasOne(Text, {
    foreignKey: 'text_id',
})

Translation.hasMany(Language, {
    foreignKey: 'lang_id'
});

Language.hasMany(Translation, {
    foreignKey: 'trans_id'
});

Rando.hasMany(Translation, {
    foreignKey: 'trans_id'
});

Rando.hasMany(Language, {
    foreignKey: 'lang_id'
}); 
=======
Translations.belongsTo(Comments);
>>>>>>> 657d0abaf4f6bf31258bf5f05c96ba991154c97e

=======
>>>>>>> bd718da4fc4654b80ad05038e50537a712ca8921
module.exports = {
    User,
    Comments,
};