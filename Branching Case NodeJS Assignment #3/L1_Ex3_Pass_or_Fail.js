
/*
Level 1 - Exercise 3
Title: Pass or Fail
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 1 - Exercise 3: Pass or Fail");
console.log("---------------------------------");

rl.question("Enter your score (0-100): ", function (answer) {
    const score = Number(answer);

    if (answer.trim() === "" || !Number.isFinite(score)
        || score < 0 || score > 100) {
        console.log("Invalid score. Enter a value from 0 to 100.");
    } else if (score >= 60) {
        console.log("Result: PASS");
    } else {
        console.log("Result: FAIL");
    }

    rl.close();
});
