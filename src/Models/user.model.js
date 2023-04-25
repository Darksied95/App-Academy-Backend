const { sequelize } = require('../Db/db');
const { DataTypes, Model } = require('sequelize')

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, timestamps: true })


module.exports = User