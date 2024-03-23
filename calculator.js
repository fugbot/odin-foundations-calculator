let firstNum;
let operator;
let secondNum;

function operate(operator, num1, num2){
    if(operator === "add"){
        add(num1, num2);
    } else if(operator == "subtract"){
        subtract(num1, num2);
    } else if(operator == "multiply"){
        multiply(num1, num2);
    } else if(operator == "divide"){
        divide(num1, num2);
    }

}

function add(a,b){
    console.log(a + b);
}

function subtract(a,b){
    console.log(a - b);
}

function multiply(a,b){
    console.log(a * b);
}

function divide(a,b){
    console.log(a / b);
}

add(0, 5);
subtract(2,3);
multiply(2, 4);
divide(10,2);
operate("add", 5, 3);

const displayValue = document.querySelector("#display");
console.log(displayValue)
displayValue.innerHTML = "Hello World!";
