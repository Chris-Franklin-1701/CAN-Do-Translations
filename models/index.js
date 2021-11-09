const User = require('./user');
const Text = require('./text');
const Translation = require('./translation');
const Language = require('./language');
const Rando = require('./rando');

User.hasMany(Text, {
    foreignKey: 'user_id'
});

Text.belongsTo(User, {
    foreignKey: 'user_id'
});

Text.hasOne(Translation, {
    foreignKey: 'trans_id'
});

Text.hasOne(Language, {
    foreignKey: 'lang_id'
});

Translation.hasOne(Text, {
    foreignKey: 'text_id'
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

module.exports = {
    User,
    Text,
    Translation,
    Language,
    Rando,
};