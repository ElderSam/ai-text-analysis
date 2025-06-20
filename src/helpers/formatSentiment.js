export function formatSentiment(sentimentArr) {
    if (!Array.isArray(sentimentArr) || sentimentArr.length === 0) {
        return { sentiment: "Unknown" };
    }
    const top = sentimentArr.reduce((max, curr) => curr.score > max.score ? curr : max, sentimentArr[0]);
    const percent = Math.round(top.score * 100);
    return { sentiment: `${percent}% ${top.label}` };
}

// EXAMPLE --------------------------
// const result = formatSentiment([
//     { label: "POSITIVE", score: 0.9984315037727356 },
//     { label: "NEGATIVE", score: 0.0015685010002925992 }
// ]);
// result: { sentiment: "99% POSITIVE" }