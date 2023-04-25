const express = require('express')
const cors = require('cors')
const app = express()
const todoRouter = require("./Routes/todo.route")
const userRouter = require("./Routes/user.route")
const errorHandler = require('./Middleware/ErrorHandler')


app.use(express.json())
app.use(cors())
app.use('/api/todos', todoRouter)
app.use('/api/user', userRouter)
app.use(errorHandler)


module.exports = app