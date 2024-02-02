/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.getElementById('add1').value);
    let number2 = Number(document.getElementById('add2').value);
    document.getElementById('#sum').value = add(number1, number2);
    document.querySelector("#addNumbers").addEventListener('click', addNumbers);

}

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let number1 = Number(document.getElementById('subtract1').value);
    let number2 = Number(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(number1, number2);
};

document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
};

document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Function Declaration
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Function Expression
const divideNumbers = function() {
    // Arrow Function inside function expression
    let quotient = () => {
        let dividend = Number(document.getElementById('dividend').value);
        let divisor = Number(document.getElementById('divisor').value);
        return divide(dividend, divisor);
    };

    document.getElementById('quotient').value = quotient();
};

// Adding Event Listener
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);


/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    // Get numeric value from the subtotal field
    let subtotal = Number(document.getElementById('subtotal').value);

    // Check if the membership checkbox is checked
    let isMember = document.getElementById('member').checked;

    // Apply a 20% discount if the user is a club member
    if (isMember) {
        subtotal *= 0.8; // 20% discount
    }

    // Output the total to the 'total' span with two decimals using a template string
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').textContent = numArray;
/* Output Odds Only Array */
let oddNumbers = numArray.filter(function(number) {
    return number % 2 !== 0;
});

// Display the result in the HTML element with ID 'odds'
document.getElementById('odds').textContent = 'Odd Numbers: ' + oddNumbers.join(', ');

/* Output Evens Only Array */
let evenNumbers = numArray.filter(function(number) {
    return number % 2 === 0;
});
document.getElementById('evens').textContent = 'Even Numbers: ' + evenNumbers.join(', ');

/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numArray.reduce((sum, number) => sum + number)
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */
// Use the map() method to multiply each element by two
let multipliedArray = numArray.map(function(element) {
    return element * 2;
});

// Use the reduce() method to sum the multiplied elements
let sumOfMultiplied = multipliedArray.reduce(function(acc, current) {
    return acc + current;
}, 0);

// Display the sum in the HTML element with ID 'sumOfMultiplied'
document.getElementById('sumOfMultiplied').textContent = 'Sum of Multiplied: ' + sumOfMultiplied;
