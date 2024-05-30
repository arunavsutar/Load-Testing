const app = require('./app');
const { PORT } = require('./config/server.config');

const fastify = require('fastify')({ logger: true });

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started at - ${PORT}`);
});