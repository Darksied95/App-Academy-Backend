const UserModel = require('../Models/user.model')
const bcrypt = require('bcryptjs')



async function loginHandler(req, res) {

    const { password, username } = req.body

    const user = await UserModel.findOne({ where: { username } })

    if (!user) throw new Error("Wrong username or password")

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) throw new Error("Wrong username or password")

    const token = await user.generateAuthToken()

    res.json({ type: "success", user, token })
}

async function registerHandler(req, res) {

    let { username, password } = req.body

    password = await bcrypt.hash(password, 8)

    if (!username || !password) throw new Error("Something went wrong")

    const user = await UserModel.create({ username, password })

    const token = await user.generateAuthToken()

    res.json({ type: 'success', user, token })
}



module.exports = { loginHandler, registerHandler }