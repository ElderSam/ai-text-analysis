import { formatSentiment } from "../helpers/formatSentiment.js";

const huggingFaceAIBaseURL = 'https://api-inference.huggingface.co';
const model = 'distilbert/distilbert-base-uncased-finetuned-sst-2-english';

const HFUrl = `${huggingFaceAIBaseURL}/models/${model}`;


export async function textAnalysis({request, text}) {
    const token = process.env.HF_API_KEY;

    try {
        const hfResponse = await fetch(
            HFUrl,
            {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputs: text }),
            }
        );

        const result = await hfResponse.json();
        const sentiment = result[0]; // ex: { label: "NEGATIVE", score: 0.998 }

        return {sentiment: formatSentiment(sentiment)};
    }
    catch (err) {
        request.log.error(err);
        return { error: 'Error when processing feeling.' };
    }
}