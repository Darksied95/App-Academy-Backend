const express = require('express')
const { getTodos, deleteTodo, updateTodo, createTodo } = require('../Controllers/todo.controller')
const auth = require('../Middleware/auth')

const router = express.Router()

router.get('/', auth, getTodos)
router.delete('/', auth, deleteTodo)
router.put('/', auth, updateTodo)
router.post('/', auth, createTodo)


module.exports = router