const fastifyPlugin = require("fastify-plugin");
const TodoService = require("./todo.services");

async function todoservice(fastify, options) {
    const { todoRepository } = fastify
    const todoserve=new TodoService(todoRepository);
    fastify.decorate('todoService', todoserve);
}

module.exports = fastifyPlugin(todoservice);