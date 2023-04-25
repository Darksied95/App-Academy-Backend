const express = require('express')
const { getTodos, deleteTodo, updateTodo, createTodo } = require('../Controllers/todo.controller')

const router = express.Router()

router.get('/', getTodos)
router.delete('/', deleteTodo)
router.put('/', updateTodo)
router.post('/', createTodo)


module.exports = router