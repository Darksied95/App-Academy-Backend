const Todomodel = require('../Models/todo.model')
const { BadRequestError } = require('../Errors')

async function getTodos(req, res, next) {
    try {
        const todos = await Todomodel.findAll({
            where: {
                author_id: req.user.id
            }
        })

        res.json(todos)
    } catch (error) {
        next(error)
    }

}

async function deleteTodo(req, res, next) {
    try {
        const user = await Todomodel.destroy({
            where: {
                id: req.params.id,
                author_id: req.user.id
            }
        })

        res.json({ type: "success", count: user })
    } catch (error) {
        next(error)
    }

}
async function updateTodo(req, res, next) {

    try {
        const { completed, text } = req.body

        const updateObj = {}

        updateObj.completed = completed || false

        updateObj.text = text

        const user = await Todomodel.update(updateObj, {
            where: {
                id: req.params.id,
                author_id: req.user.id
            }
        })
        res.json({ type: "success", user })
    } catch (error) {
        next(error)
    }

}
async function createTodo(req, res) {
    try {
        const { text } = req.body

        if (!text) throw new BadRequestError('Text cannot be empty')

        const todo = await Todomodel.create({
            author_id: req.user.id,
            text
        })
        res.json({ type: "success", todo })
    } catch (error) {
        next(error)
    }


}

module.exports = { getTodos, deleteTodo, updateTodo, createTodo }