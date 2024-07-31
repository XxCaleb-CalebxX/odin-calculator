const numbtn = document.querySelector(".num-buttons");
const opbtn = document.querySelector(".operator-buttons");
const displayBox = document.querySelector("#screen");

let add = (num1 , num2 ) => num1 + num2; 
let subtract = (num1 , num2) => num1 - num2;
let multiply = (num1 , num2) => num1 *num2;
let divide = (num1 , num2) => +(num1/num2).toFixed(2);

let display = [];

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
        case 'point':
            display.push('.')
            break;
        case 'clear':
            display = [];
            break;
        default:
        
    }
    displayBox.textContent = display.join('');
});

let operation = {};
let clearOp = () => operation = {};

opbtn.addEventListener('click' , function(e) {
    if (e.target.id == "equals") {
        console.log('equals');
        switch (operation.operator) {
            case 'add':
                displayBox.textContent = add(operation.firstNum , currentNum());
                display =[];
                clearOp();
                break;
            case 'sub':
                displayBox.textContent = subtract(operation.firstNum , currentNum());
                display =[];
                clearOp();
                break;
            case 'multiply':
                displayBox.textContent = multiply(operation.firstNum , currentNum());
                display =[];
                clearOp();
                break;
            case 'divide':
                displayBox.textContent = divide(operation.firstNum , currentNum());
                display =[];
                clearOp();
                break;
        }
    }
    else if (Object.hasOwn(operation , 'firstNum')) {
        console.log('second');
        console.log(operation);
        let secondNum = currentNum();
        switch (operation.operator) {
            case 'add':
                operation.firstNum = add(operation.firstNum , currentNum());
                operation.operator = e.target.id
                display = [];
                break;
            case 'sub':
                operation.firstNum = subtract(operation.firstNum , currentNum());
                operation.operator = e.target.id
                display = [];
                break;
            case 'multiply':
                operation.firstNum = multiply(operation.firstNum , currentNum());
                operation.operator = e.target.id
                display = [];
                break;
            case 'divide':
                operation.firstNum = divide(operation.firstNum , currentNum());
                operation.operator = e.target.id
                display = [];
                break;
        }
        console.log(operation);
    }
    else {  console.log('third');
            operation.firstNum = +display.join('');
            operation.operator = e.target.id
            display = [];
    }
})