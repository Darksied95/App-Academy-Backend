const UserModel = require('../Models/user.model')
const { UnAunthenticatedError } = require('../Errors')
const jwt = require('jsonwebtoken')


async function auth(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')

        const decoded = jwt.decode(token, process.env.JWT_SIGNATURE)

        const user = await UserModel.findOne({ where: { id: decoded.id } })

        if (!user) throw new UnAunthenticatedError('User not Authenticated')

        req.user = user.dataValues

        req.token = token

        next()
    } catch (error) {
        next(error)
    }

}

module.exports = auth