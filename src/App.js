const express = require('express')
const app = express()
const todoRouter = require("./Routes/todo.route")
const userRouter = require("./Routes/user.route")


app.use(express.json())
app.use('/api/todos', todoRouter)
app.use('/api/user', userRouter)


module.exports = app