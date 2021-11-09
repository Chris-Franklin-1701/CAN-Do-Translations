const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rando extends Model { }

Rando.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        lang_name: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'language',
                key: 'lang_name'
            }
        },
        trans_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'translation',
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
        modelName: 'rando',
    }
);

module.exports = Rando;