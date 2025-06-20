export function formatSentiment(sentimentArr) {
    if (!Array.isArray(sentimentArr) || sentimentArr.length === 0) {
        return "Unknown";
    }
    const top = sentimentArr.reduce((max, curr) => curr.score > max.score ? curr : max, sentimentArr[0]);
    const percent = (top.score * 100).toFixed(2);
    return `${percent}% ${top.label}`;
}

// EXAMPLE --------------------------
// const result = formatSentiment([
//     { label: "POSITIVE", score: 0.9984315037727356 },
//     { label: "NEGATIVE", score: 0.0015685010002925992 }
// ]);
// result: "99% POSITIVE"