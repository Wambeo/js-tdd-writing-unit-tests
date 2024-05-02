// Your code here
export function pointsForWord(word) {
    let points = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            points += 1;
        } else {
            points += 2;
        }
    }
    return points;
}
