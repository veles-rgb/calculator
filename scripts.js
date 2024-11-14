// Variables
const display = document.querySelector(".display p");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace");

let firstNum = null;
let secondNum = null;
let operator = null; // +, −, ×, ÷
let currentNum = "";

// Functions
function clear() {
    firstNum = null;
    secondNum = null;
    operator = null;
    currentNum = "";
    display.textContent = "";
}

function add(firstNum, secondNum) {
    return firstNum + secondNum;
};

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
};

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

function operate(firstNum, operator, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator === "−") {
        return subtract(firstNum, secondNum);
    } else if (operator === "×") {
        return multiply(firstNum, secondNum);
    } else if ( operator === "÷") {
        if (secondNum === 0) {
            return "bruh...";
        } else {
            return divide(firstNum, secondNum);
        }
    } else {
        return "ERROR - Invalid Operator";
    };
};

// Event listeners
clearBtn.addEventListener("click", () => {
    clear()
});

backspaceBtn.addEventListener("click", () => {
    currentNum = currentNum.substring(0, currentNum.length - 1)
    display.textContent = currentNum
});

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        currentNum += number.textContent;
        display.textContent = currentNum;
    });
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (firstNum == null) {
            firstNum = currentNum;
            operator = op.textContent;
            display.textContent = op.textContent;
            currentNum = "";
        } else if (secondNum === null) {
            secondNum = currentNum;
            currentNum = operate(+firstNum, operator, +secondNum);
            display.textContent = currentNum
            firstNum = currentNum
            secondNum = null;
            operator = op.textContent
            currentNum = "";
        }
    })
});

equalBtn.addEventListener("click", () => {
    display.textContent = operate(+firstNum, operator, +currentNum);
});