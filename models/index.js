const User = require('./user');
const Comments = require('./comments');
const Translations = require('./translations');

<<<<<<< HEAD
User.hasMany(Text, {
    foreignKey: 'user_id',
});
=======
User.hasMany(Comments);
>>>>>>> 657d0abaf4f6bf31258bf5f05c96ba991154c97e

Comments.belongsTo(User);

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

module.exports = {
    User,
    Comments,
    Translations,
};