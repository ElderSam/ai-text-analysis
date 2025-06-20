import { getBasicTextStatistics } from './helpers/text.js';
import { textAnalysis } from './services/TextAnalysisByAI.js';

export default function routes(app) {

    app.get("/", async (request, reply) => {
        return { message: "Hello, world!" };
    });


    app.post("/analyze-text", async (request, reply) => {
        if(!request?.body?.text) {
            return reply
                .code(400)
                .send({ error: `body with 'text' property is required` });
        }

        const { text } = request.body;
        console.log({ text });

        const { wordsCount, topWords } = getBasicTextStatistics(text);

        const sentmentAnalysis = await textAnalysis({request, text});
        if(sentmentAnalysis.error) {
            reply.code(500);
        }

        const resData = {
            text,
            sentmentAnalysis,
            wordsCount,
            topWords,
        };

        reply.send(resData);
    })
}