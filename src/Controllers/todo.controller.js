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
    console.log(req.query, req.params, 90);
    const user = await Todomodel.destroy({
        where: {
            id: req.params.id,
            author_id: req.user.id
        }
    })

    res.json({ type: "success", count: user })
}
async function updateTodo(req, res) {
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