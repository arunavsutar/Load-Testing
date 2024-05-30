const { pingRequest, createTodoRequest, getTodoRequest, getTodosRequest, deleteTodosRequest, updateTodosRequest } = require("./todo.routes");

async function registerTodoRoutes(fastify,options){
    fastify.register(pingRequest);
    fastify.register(createTodoRequest);
    fastify.register(getTodoRequest);
    fastify.register(getTodosRequest);
    fastify.register(deleteTodosRequest);
    fastify.register(updateTodosRequest);
}

module.exports=registerTodoRoutes;