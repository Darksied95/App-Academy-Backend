const express = require('express')
const { loginHandler, registerHandler } = require('../Controllers/user.controller')


const router = express.Router()

router.get('/', loginHandler)
router.post('/login', loginHandler)
router.post('/register', registerHandler)


module.exports = router