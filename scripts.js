let num1 = null;
let operator = null;
let num2 = null;
let currentDisplay = "";

const display = document.querySelector(".display p");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals");

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function clear() {
    num1 = null;
    operator = null;
    num2 = null;
    currentDisplay = "";
    display.textContent = "";
};

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if ( operator === "−") {
        return subtract(num1, num2);
    } else if (operator === "×") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
        return divide(num1, num2);
    } else {
        return "ERROR (invalid operator)";
    };
};

clearBtn.addEventListener("click", () => {
    clear();
});

const numbers = document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        if (operator === null) {
            currentDisplay += number.textContent;
            display.textContent = currentDisplay;
            num1 = currentDisplay;
        } else {
            currentDisplay = "";
            currentDisplay += number.textContent;
            display.textContent = currentDisplay;
            num2 = currentDisplay;
        }
    });
});

const operators = document.querySelectorAll(".operator").forEach(op => {
    op.addEventListener("click", () => {
        currentDisplay = op.textContent;
        display.textContent = currentDisplay;
        operator = currentDisplay;
    });
});

equalsBtn.addEventListener("click", () => {
    if (num1 !== null && operator !== null && num2 !== null) {
        display.textContent = operate(+num1, operator, +num2);
    } else {
        console.log("ERROR")
    }
});

/* 
TO DO:
Currently the calculations only work with 2 numbers.
I need to fix it so that you can do 5 + 5 + 1 etc instead of only 5 + 5
A solution for that would be to calculate num1 and num2 after num2 is set 
then send it to num1 and reset num2
*/