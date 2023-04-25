const express = require('express')
const app = express()
const todoRouter = require("./Routes/todo.route")
const userRouter = require("./Routes/user.route")


app.use(express.json())
app.use('/todos', todoRouter)
app.use('/users', userRouter)


module.exports = app