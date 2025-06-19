const stopwords = [
    // Portuguese stopwords
    "a", "o", "e", "de", "do", "da", "em", "um", "uma", "para", "com", "não", "que", "se", "na", "no", "os", "as", "por", "mais", "mas", "como", "ou", "dos", "das", "ao", "à", "às", "é", "foi", "ser", "tem", "há", "são",
    // English stopwords
    "the", "and", "is", "in", "it", "you", "that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "not", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she"
];


export function getBasicTextStatistics(text) {
    const words = text
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
        .split(/\s+/)
        .map(w => w.replace(/[^\w]/g, "")) // remove ponctuaction
        .filter(Boolean)
        .filter(w => !stopwords.includes(w));

    const freq = {};

    // words frequency
    for (const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    // top 5 most frequently words
    const topWords = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([word, count]) => ({ word, count }));

    const wordsCount = words.length;

    return {
        text,
        wordsCount,
        topWords
    };
}