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
        // input: {
        //     type: DataTypes.STRING,
        // },
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