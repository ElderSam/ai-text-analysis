import fastify from "fastify";
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

import './config.js';
import routes from "./routes.js";
import { swaggerUiOptions } from "./docs/swagger.js";

const app = fastify({ logger: true });

// 📌 Registro do Swagger (documentação das rotas)
await app.register(swagger);
await app.register(swaggerUI, swaggerUiOptions);

app.register(routes);


const PORT = process.env.PORT || 3000;

// Run the server!
try {
    const address = await app.listen({ port: PORT });
    console.log(`Server is running at ${address}`);
}
catch (err) {
    app.log.error(err)
    process.exit(1)
}