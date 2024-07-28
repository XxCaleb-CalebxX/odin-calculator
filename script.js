const numbtn = document.querySelector(".num-buttons");
const opbtn = document.querySelector(".operator-buttons");
const displayBox = document.querySelector("#screen");
const resultBox = document.querySelector('#results');

let add = (num1 , num2 ) => num1 + num2; 
let subtract = (num1 , num2) => num1 - num2;
let multiply = (num1 , num2) => num1 *num2;
let divide = (num1 , num2) => +(num1/num2).toFixed(2);

let display = [];
let clearDisplay = () => {
    display = [];
    displayBox.textContent = "";
};
let currentNum = () => +display.join('');

numbtn.addEventListener('click' , function(e) {
    switch(e.target.id) {
        case 'zero':
            display.push('0');
            break;
        case 'one':
            display.push('1');
            break;
        case 'two':
            display.push('2');
            break;
        case 'three':
            display.push('3');
            break;
        case 'four':
            display.push('4');
            break;
        case 'five':
            display.push('5');
            break;
        case 'six':
            display.push('6');
            break;
        case 'seven':
            display.push('7');
            break;
        case 'eight':
            display.push('8');
            break;
        case 'nine':
            display.push('9');
            break;
        default:
            
        
    }
    resultBox.textContent = "";
    displayBox.textContent = currentNum();
});

let operation = {};
let clearOp = () => operation = {};

opbtn.addEventListener('click' , function(e) {
    if (e.target.id == "equals") {
        switch (operation.operator) {
            case 'add':
                resultBox.textContent = add(operation.firstNum , currentNum());
                clearDisplay();
                clearOp();
                break;
            case 'sub':
                resultBox.textContent = subtract(operation.firstNum , currentNum());
                clearDisplay();
                clearOp();
                break;
            case 'multiply':
                resultBox.textContent = multiply(operation.firstNum , currentNum());
                clearDisplay();
                clearOp();
                break;
            case 'divide':
                resultBox.textContent = divide(operation.firstNum , currentNum());
                clearDisplay();
                clearOp();
                break;
        }
    }
    else {
            operation.firstNum = +display.join('');
            operation.operator = e.target.id
            clearDisplay();
    }
})