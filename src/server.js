import fastify from "fastify";
import routes from "./routes.js";

const app = fastify();

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