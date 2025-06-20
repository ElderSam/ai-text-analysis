import routeSchemes from './docs/routeSchemes.js';
import { getBasicTextStatistics } from './helpers/text.js';
import { textAnalysis } from './services/TextAnalysisByAI.js';

let lastAnalysis = null;

export default function routes(app) {

    app.get("/", {
        schema: routeSchemes["/"],
        handler: async (request, reply) => {
            const link = `/docs`;
            const htmlContent = `Welcome. </br><a href='${link}'>Click here to access the API docs.</a>`;

            return reply.type("text/html").send(htmlContent);
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

            // Saves the last analysis in memory
            lastAnalysis = { text, wordsCount, topWords, sentimentAnalysis };

            const resData = {
                sentimentAnalysis,
                wordsCount,
                topWords,
            };

            reply.send(resData);
        }
    });


    app.get("/search-term", {
        schema: routeSchemes['/search-term'],
        handler: async (request, reply) => {
            const { term } = request.query;
            if (!term) {
                return reply.code(400).send({ error: "Query param 'term' is required" });
            }
            if (!lastAnalysis) {
                return reply.code(404).send({ error: "No analysis found. Please analyze a text first." });
            }

            // Search for the term in the text of the last analysis (case-insensitive)
            const found = lastAnalysis.text
                .toLowerCase()
                .includes(term.toLowerCase());

            reply.send({
                term,
                found,
                lastAnalyzedText: lastAnalysis.text
            });
        }
    });
}