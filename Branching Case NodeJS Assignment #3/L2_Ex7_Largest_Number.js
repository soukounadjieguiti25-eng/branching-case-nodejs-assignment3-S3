
/*
Level 2 - Exercise 7
Title: Largest of Two Numbers
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 2 - Exercise 7: Largest Number");
console.log("------------------------------------");

rl.question("Enter the first number: ", function (firstAnswer) {
    rl.question("Enter the second number: ", function (secondAnswer) {
        const firstNumber = Number(firstAnswer);
        const secondNumber = Number(secondAnswer);

        if (
            firstAnswer.trim() === "" ||
            secondAnswer.trim() === "" ||
            !Number.isFinite(firstNumber) ||
            !Number.isFinite(secondNumber)
        ) {
            console.log("Invalid input. Please enter two numbers.");
        } else if (firstNumber > secondNumber) {
            console.log("The largest number is " + firstNumber);
        } else if (secondNumber > firstNumber) {
            console.log("The largest number is " + secondNumber);
        } else {
            console.log("Both numbers are equal.");
        }

        rl.close();
    });
});
