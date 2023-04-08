// let scoreArr = []
function breakingRecords(scores) {
    // Write your code here
    let maxScore = scores[0];
    let minScore = scores[0];
    let maxBreaks = 0;
    let minBreaks = 0;
    
    for (let i in scores) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxBreaks++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            minBreaks++;
        }
    }
    
    return [maxBreaks, minBreaks];
}