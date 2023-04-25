const Todomodel = require('../Models/todo.model')

async function getTodos(req, res) {

}

function deleteTodo(req, res) {
    res.send('success')
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