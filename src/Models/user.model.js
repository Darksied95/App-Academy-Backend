const { sequelize } = require('../Db/db');
const { DataTypes, Model } = require('sequelize')
const jwt = require('jsonwebtoken')

class User extends Model {
    generateAuthToken = async function () {
        const token = jwt.sign({ _id: this._id.toString() }, process.env.jwtSignature)
        return token
    }
}

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
}, { sequelize, timestamps: true });

(async () => {
    await sequelize.sync({})
})();

module.exports = User