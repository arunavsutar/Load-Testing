const v1Route = require('./routes');
const db = require('./db/todo.db');
const todoRepo = require('./repository/index');
const todoservice = require('./services/index');
const fp = require('fastify-plugin');

async function app(fastify, options) {
    await fastify.register(db);
    await fastify.register(todoRepo)
    await fastify.register(todoservice);
    await fastify.register(v1Route, { prefix: "/api" });
}

module.exports = fp(app);