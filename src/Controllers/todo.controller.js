const Todomodel = require('../Models/todo.model')

async function getTodos(req, res) {
    const todos = await Todomodel.findAll({
        where: {
            author_id: req.user.id
        }
    })

    res.json(todos)
}

async function deleteTodo(req, res) {
    const user = await Todomodel.destroy({
        where: {
            id: req.body.id
        }
    })

    res.json({ type: "success", count: user })
}
function updateTodo(req, res) {
    res.send('success')
}
async function createTodo(req, res) {
    const { text } = req.body

    if (!text) throw new Error('Text cannot be empty')

    const todo = await Todomodel.create({
        author_id: req.user.id,
        text
    })
    res.json({ type: "success", todo })
}

module.exports = { getTodos, deleteTodo, updateTodo, createTodo }