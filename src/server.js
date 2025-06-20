import fastify from "fastify";
import routes from "./routes.js";
import './config.js';

const app = fastify({ logger: true });

app.register(routes);

const PORT = 3000;

// Run the server!
try {
    await app.listen({ port: PORT }, (_, address) => {
        console.log(`Server is running at ${address}`);
    })
}
catch (err) {
    app.log.error(err)
    process.exit(1)
}