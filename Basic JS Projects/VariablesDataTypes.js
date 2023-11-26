function greetUser(firstName, lastName) {
    console.log('Hi ' + firstName + ' ' + lastName);
}

function checkEmail(email) {
    let result = email.includes("@");
    if (result) {
        console.log('Yes: "@" exists in ' + email);
    } else {
        console.log('No: "@" doesn\'t exist in ' + email);
    }
}

function calculateBirthYear(age) {
    let nowDate = new Date();
    let yearNow = nowDate.getFullYear();
    return yearNow - age;
}

function calculateDaysLived(age) {
    return age * 365;
}

function determineUserType(age) {
    if (age <= 13) {
        return 'Child';
    } else if (age < 18 && age > 13) {
        return 'Teenager';
    } else {
        return 'Adult';
    }
}

function generateUsername(firstName, lastName, birthYear) {
    return firstName.charAt(0) + lastName + birthYear.toString().slice(-2);
}

function evaluateUsernameStrength(age) {
    if (age <= 5) {
        return 'Weak';
    } else if (age < 10 && age > 5) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}

// User information
let firstName = 'brahim';
let lastName = 'elghazi';
let age = 21;
let email = 'b@gmail.com';

// Function calls
greetUser(firstName, lastName);
checkEmail(email);

let birthYear = calculateBirthYear(age);
console.log('Year of Birth: ' + birthYear);

let daysLived = calculateDaysLived(age);
console.log('Days Lived: ' + daysLived);

let userType = determineUserType(age);
console.log('User Type: ' + userType);

let username = generateUsername(firstName, lastName, birthYear);
let usernameStrength = evaluateUsernameStrength(age);
console.log('Username (' + username + ') is: ' + usernameStrength);
