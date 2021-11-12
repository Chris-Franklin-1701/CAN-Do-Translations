const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // Bring in each translation module as an attribute (With the capability of being null), so that eventually when we reach the stage where a user selects their language, the new comment can be translated into whichever language they chose
        // Additionally, as a comment is attached to the user, when the comment will eventually be saved, they can add additional translations to it without ever having lost their original translations in the process
        pig_latin: {
            type: DataTypes.STRING,
        },
        pirate: {
            type: DataTypes.STRING,
        },
        word_vomit: {
            type: DataTypes.STRING,
        },
        braille: {
            type: DataTypes.STRING,
        },
        hodor: {
            type: DataTypes.STRING,
        },
        poemify: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Comments;