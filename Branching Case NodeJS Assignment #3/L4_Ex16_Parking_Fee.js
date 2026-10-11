
/*
Level 4 - Exercise 16
Title: Parking Fee
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 4 - Exercise 16: Parking Fee");
console.log("----------------------------------");

rl.question("Enter parking duration in hours: ", function (answer) {
    const hours = Number(answer);

    if (
        answer.trim() === "" ||
        !Number.isFinite(hours) ||
        !Number.isInteger(hours) ||
        hours <= 0
    ) {
        console.log("Invalid input. Enter a positive whole number of hours.");
    } else {
        let fee = 5000 + (hours - 1) * 3000;

        if (fee > 20000) {
            fee = 20000;
        }

        console.log("Parking duration: " + hours + " hour(s)");
        console.log("Parking fee: Rp" + fee);
    }

    rl.close();
});
