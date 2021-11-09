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
        modelName: 'language',
    }
);

module.exports = Translation;