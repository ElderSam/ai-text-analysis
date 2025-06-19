import fastify from "fastify";

const app = fastify();

app.get("/", async (req, res) => {
    return { message: "Hello, world!" };
});

const PORT = 3000;

app.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
});