const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Translations extends Model { }

Translations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comments_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'comments',
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'translations',
    }
);

module.exports = Translations;