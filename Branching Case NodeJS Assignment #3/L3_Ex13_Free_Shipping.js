
/*
Level 3 - Exercise 13
Title: Free Shipping
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 3 - Exercise 13: Free Shipping");
console.log("------------------------------------");

rl.question("Enter purchase amount (Rp): ", function (amountAnswer) {
    rl.question("Are you a member? (yes/no): ", function (memberAnswer) {
        const purchaseAmount = Number(amountAnswer);
        const member = memberAnswer.trim().toLowerCase();

        if (
            amountAnswer.trim() === "" ||
            !Number.isFinite(purchaseAmount) ||
            purchaseAmount < 0 ||
            !["yes", "no"].includes(member)
        ) {
            console.log("Invalid input. Enter a valid amount and yes/no.");
        } else if (purchaseAmount >= 100000 || member === "yes") {
            console.log("Shipping: FREE");
        } else {
            console.log("Shipping: PAID");
        }

        rl.close();
    });
});
