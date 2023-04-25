const { sequelize } = require('../Db/db');
const { DataTypes, Model } = require('sequelize')


class Todo extends Model { }

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: "id",
            model: "Users"
        }
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, { timestamps: true, sequelize });

module.exports = Todo