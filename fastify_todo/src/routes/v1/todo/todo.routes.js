const todoController = require("../../../controller/todo.controller")

async function pingRequest(fastify, options) {
    fastify.get('/ping', todoController.ping);
}
async function createTodoRequest(fastify, options) {
    fastify.post('/', todoController.createTodo);
}
async function getTodosRequest(fastify, options) {
    fastify.get('/getAll', todoController.getTodos)
}
async function getTodoRequest(fastify, options) {
    fastify.get('/:id', todoController.getTodo);
}
async function deleteTodosRequest(fastify, options) {
    fastify.delete('/:id', todoController.deleteTodo);
}
async function updateTodosRequest(fastify, options) {
    fastify.put('/:id', todoController.updateTodo);
}

module.exports = {
    pingRequest,
    createTodoRequest,
    getTodosRequest,
    getTodoRequest,
    deleteTodosRequest,
    updateTodosRequest
}