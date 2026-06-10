function wordFrequency(text) {
    let words = text.toLowerCase().split(/\\s+/);
    let freq = {};

    words.forEach(word => {
        freq[word] = (freq[word] || 0) + 1;
    });

    return freq;
}

let text = "the quick brown fox jumps over the lazy dog the fox is quick";
console.log(wordFrequency(text));
// { the: 3, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, is: 1 }