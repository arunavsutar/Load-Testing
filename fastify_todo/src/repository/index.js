const fastifyPlugin = require("fastify-plugin");
const TodoRepository = require("./todo.repository");

async function todoRepo(fastify, options) {
    const { db } = fastify;
    const repo=new TodoRepository(db);
    fastify.decorate('todoRepository', repo);
}

module.exports = fastifyPlugin(todoRepo);