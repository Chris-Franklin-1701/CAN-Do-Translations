const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Translation extends Model { }

Translation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'text',
                key: 'id'
            }
        },
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'language',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'translation',
    }
);

module.exports = Translation; 