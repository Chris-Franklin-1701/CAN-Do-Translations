const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Text extends Model { }

Text.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT,
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
        lang_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'language',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'text',
    }
);

module.exports = Text;