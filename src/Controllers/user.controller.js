const UserModel = require('../Models/user.model')
const bcrypt = require('bcryptjs')
function loginHandler(req, res) {
    res.send("success")
}

async function registerHandler(req, res) {
    let { username, password } = req.body
    password = await bcrypt.hash(password, 8)

    console.log(password);
    if (!username || !password) {
        throw new Error("Something went wrong")
    }

    const user = UserModel.build({ username, password })
    await user.save()
    res.json({
        type: 'success',
        body: user
    })
}



module.exports = { loginHandler, registerHandler }