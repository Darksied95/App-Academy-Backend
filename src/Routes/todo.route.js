const express = require('express')
const { getTodos, deleteTodo, updateTodo, createTodo } = require('../Controllers/todo.controller')
const auth = require('../Middleware/auth')

const router = express.Router()




router.route('/:id').patch(auth, updateTodo).delete(auth, deleteTodo)
router.route('/').get(auth, getTodos).post(auth, createTodo)


module.exports = router