function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100){
        return "A++";
    }else if ((score >= 90) & (score <= 99)){
        return "A";
    }else if ((score >= 80) & (score <= 89)){
        return "B";
    }else if ((score >= 70) & (score <= 79)){
        return "C";
    }else if ((score >= 60) & (score <= 69)){
        return "D";
    }else {
        return "F";
    }
}

console.log(getGrade(100));
console.log(getGrade(95));
console.log(getGrade(80));
console.log(getGrade(76));
console.log(getGrade(65));
console.log(getGrade(30));