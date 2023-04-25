const express = require('express')
const auth = require('../Middleware/auth')
const { loginHandler, registerHandler } = require('../Controllers/user.controller')


const router = express.Router()

router.get('/', auth, (req, res) => res.json({ id: req.user, token: req.token }))
router.post('/login', loginHandler)
router.post('/register', registerHandler)


module.exports = router