
/*
Level 2 - Exercise 6
Title: Grade Category
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 2 - Exercise 6: Grade Category");
console.log("------------------------------------");

rl.question("Enter your score (0-100): ", function (answer) {
    const score = Number(answer);

    if (answer.trim() === "" || !Number.isFinite(score)
        || score < 0 || score > 100) {
        console.log("Invalid score. Enter a value from 0 to 100.");
    } else if (score >= 80) {
        console.log("Grade: A");
    } else if (score >= 70) {
        console.log("Grade: B");
    } else if (score >= 60) {
        console.log("Grade: C");
    } else if (score >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }

    rl.close();
});
