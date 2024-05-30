const registerTodoRoutes = require("./todo");

async function todoRoute(fastify, options) {
    fastify.register(registerTodoRoutes, { prefix: '/todo' });
}

module.exports = todoRoute