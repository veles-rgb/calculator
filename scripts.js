let num1 = null;
let operator = null;
let num2 = null;
let currentDisplay = "";

const display = document.querySelector(".display p")
const clearBtn = document.querySelector(".clear-btn");

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
    } else if ( operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else {
        return "ERROR (invalid operator)";
    };
};

let numbers = document.querySelectorAll(".number").forEach(number => {
    number.addEventListener("click", () => {
        currentDisplay += number.textContent;
        display.textContent = currentDisplay;
    })
    currentDisplay = display.textContent;
});

clearBtn.addEventListener("click", () => {
    clear();
});