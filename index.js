import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
    return { message: "Hello, world!" };
});

app.post("/analyze-text", async (request, reply) => {
    if(!request?.body?.text) {
        return reply
            .code(400)
            .send(`body with 'text' property is required`);
    }

    const { text } = request.body;
    console.log({ text });

    const words = text
        .trim().split(/\s+/)
        .filter(Boolean);

    const wordsCount = words.length;


    const freq = {};

    // words frequency
    for(const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    // top 5 most frequently words
    const mostFrequentWords = Object.entries(freq)
        .sort((a, b) =>  b[1] - a[1]) // descending order
        .slice(0, 5);

    const resData = {
        text,
        wordsCount,
        mostFrequentWords
    };

    reply.send(resData);
})

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