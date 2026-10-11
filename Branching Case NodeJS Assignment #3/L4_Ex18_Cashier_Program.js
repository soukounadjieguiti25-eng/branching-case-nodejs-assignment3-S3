
/*
Level 4 - Exercise 18
Title: Cashier Program
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 4 - Exercise 18: Cashier Program");
console.log("--------------------------------------");

rl.question("Enter purchase amount (Rp): ", function (amountAnswer) {
    rl.question("Are you a member? (yes/no): ", function (memberAnswer) {
        rl.question("Enter payment amount (Rp): ", function (paymentAnswer) {
            const purchaseAmount = Number(amountAnswer);
            const payment = Number(paymentAnswer);
            const member = memberAnswer.trim().toLowerCase();

            if (
                amountAnswer.trim() === "" ||
                paymentAnswer.trim() === "" ||
                !Number.isFinite(purchaseAmount) ||
                !Number.isFinite(payment) ||
                purchaseAmount < 0 ||
                payment < 0 ||
                !["yes", "no"].includes(member)
            ) {
                console.log("Invalid input. Check the amounts and member status.");
            } else {
                let discount = 0;

                if (member === "yes") {
                    discount = purchaseAmount * 0.10;
                }

                const finalAmount = purchaseAmount - discount;

                console.log("\n----- RECEIPT -----");
                console.log("Purchase amount: Rp" + purchaseAmount);
                console.log("Discount: Rp" + discount);
                console.log("Final amount: Rp" + finalAmount);
                console.log("Payment: Rp" + payment);

                if (payment < finalAmount) {
                    console.log("Payment is insufficient.");
                    console.log(
                        "Remaining amount: Rp" + (finalAmount - payment)
                    );
                } else {
                    console.log("Payment successful.");
                    console.log("Change: Rp" + (payment - finalAmount));
                }
            }

            rl.close();
        });
    });
});
