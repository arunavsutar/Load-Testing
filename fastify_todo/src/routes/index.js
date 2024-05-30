const todoRoute = require("./v1/index")

async function v1Route(fastify, options) {
    fastify.register(todoRoute, { prefix: '/v1' });
}

module.exports = v1Route