
/*
Level 3 - Exercise 12
Title: Student Passing Check
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nLevel 3 - Exercise 12: Student Passing Check");
console.log("--------------------------------------------");

rl.question("Enter your score (0-100): ", function (scoreAnswer) {
    rl.question("Enter attendance percentage (0-100): ", function (attendanceAnswer) {
        const score = Number(scoreAnswer);
        const attendance = Number(attendanceAnswer);

        if (
            scoreAnswer.trim() === "" ||
            attendanceAnswer.trim() === "" ||
            !Number.isFinite(score) ||
            !Number.isFinite(attendance) ||
            score < 0 || score > 100 ||
            attendance < 0 || attendance > 100
        ) {
            console.log("Invalid input. Both values must be from 0 to 100.");
        } else if (score >= 60 && attendance >= 75) {
            console.log("Result: PASS");
        } else {
            console.log("Result: FAIL");

            if (score < 60) {
                console.log("Reason: Score is below 60.");
            }

            if (attendance < 75) {
                console.log("Reason: Attendance is below 75%.");
            }
        }

        rl.close();
    });
});
