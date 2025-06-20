const routeSchemes = {
    "/": {
        tags: ["Start"],
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
        tags: ["Default"],
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
    },
    "/search-term": {
        tags: ["Default"],
        summary: "Busca termo na última análise",
        querystring: {
            type: "object",
            required: ["term"],
            properties: {
                term: { type: "string" }
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    term: { type: "string" },
                    found: { type: "boolean" },
                    lastAnalyzedText: { type: "string" }
                }
            },
            400: {
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            },
            404: {
                type: "object",
                properties: {
                    error: { type: "string" }
                }
            }
        }
    }
}

export default routeSchemes;