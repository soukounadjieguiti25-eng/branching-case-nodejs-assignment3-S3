
/*
Level 1 - Exercise 2
Title: Even or Odd
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Level 1 - Exercise 2");
console.log("Title: Even or Odd");
console.log("----------------------");

rl.question("Enter a number: ", function (answer) {
    const number = Number(answer);

    if (answer.trim() === "" || !Number.isFinite(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (number % 2 === 0) {
        console.log(number + " is an even number.");
    } else {
        console.log(number + " is an odd number.");
    }

    rl.close();
});
