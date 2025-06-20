const routeSchemes = {
    "/": {
        summary: "Rota inicial",
        response: {
            200: {
                type: "object",
                properties: {
                    message: { type: "string" }
                }
            }
        }
    },
    "/analyze-text": {
        summary: 'Analisar sentimento',
        body: {
            type: 'object',
            required: ['text'],
            properties: {
                text: { type: 'string' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    sentimentAnalysis: {
                        type: 'object',
                        properties: {
                            sentiment: { type: 'string' }
                        }
                    },
                    wordsCount: { type: 'number' },
                    topWords: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                word: { type: 'string' },
                                count: { type: 'number' }
                            }
                        }
                    }
                }
            },
            500: {
                type: 'object',
                properties: {
                    sentimentAnalysis: {
                        type: 'object',
                        properties: {
                            error: { type: 'string' }
                        }
                    },
                    wordsCount: { type: 'number' },
                    topWords: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                word: { type: 'string' },
                                count: { type: 'number' }
                            }
                        }
                    }
                }
            }
        }
    }
}

export default routeSchemes;