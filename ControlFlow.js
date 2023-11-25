const prompt = require("prompt-sync")();
function getUserAge() {
    return prompt("Give Your Age: ");
}
function checkEligibility(age) {
    if (age < 18) {
        console.log("The User is not eligible to Vote");
    } else {
        console.log("Welcoming the user to vote");
    }
}
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
function checkDayOfWeek(dayOfWeek) {
    switch (dayOfWeek) {
        case 6:
        case 7:
            console.log("Weekend");
            break;
        default:
            console.log("Working");
    }
}
// Call the functions
let userAge = getUserAge();
checkEligibility(userAge);
printNumbers();
let dayOfWeek = 4;
checkDayOfWeek(dayOfWeek);
