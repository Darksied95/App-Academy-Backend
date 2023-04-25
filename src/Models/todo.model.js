const { sequelize } = require('../Db/db');
const { DataTypes, Model } = require('sequelize')


class Todo extends Model { }

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
}, { timestamps: true, sequelize })

module.exports = Todo