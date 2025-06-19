import fastify from "fastify";

const app = fastify();

app.get("/", async (req, res) => {
    return { message: "Hello, world!" };
});

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