const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model { }

Language.init(
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
        },
        trans_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'translation',
                key: 'id'
            }
        },
        // lang_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language',
    }
);

module.exports = Language;