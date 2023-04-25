const express = require('express')
const { getTodos, deleteTodo, updateTodo, createTodo } = require('../Controllers/todo.controller')
const auth = require('../Middleware/auth')

const router = express.Router()



router.route('/')
    .get(auth, getTodos)
    .patch(auth, updateTodo)
    .post(auth, createTodo)
    .delete(auth, deleteTodo)


module.exports = router