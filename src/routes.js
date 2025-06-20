import routeSchemes from './docs/routeSchemes.js';
import { getBasicTextStatistics } from './helpers/text.js';
import { textAnalysis } from './services/TextAnalysisByAI.js';

export default function routes(app) {

    app.get("/", {
        schema: routeSchemes["/"],
        handler: async (request, reply) => {
            return { message: "Hello, world!" };
        }
    });


    app.post("/analyze-text", {
        schema: routeSchemes['/analyze-text'],

        handler: async (request, reply) => {
            if(!request?.body?.text) {
                return reply
                    .code(400)
                    .send({ error: `body with 'text' property is required` });
            }

            const { text } = request.body;
            console.log({ text });

            const { wordsCount, topWords } = getBasicTextStatistics(text);

            const sentimentAnalysis = await textAnalysis({request, text});
            if(sentimentAnalysis.error) {
                reply.code(500);
            }

            const resData = {
                sentimentAnalysis,
                wordsCount,
                topWords,
            };

            reply.send(resData);
        }
    })
}