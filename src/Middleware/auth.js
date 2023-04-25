const UserModel = require('../Models/user.model')
const jwt = require('jsonwebtoken')


async function auth(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '')

    const decoded = jwt.decode(token, process.env.JWT_SIGNATURE)

    const user = await UserModel.findOne({ where: { id: decoded._id } })

    if (!user) throw new Error('User not Authenticated')

    req.user = user.dataValues

    req.token = token

    next()
}

module.exports = auth