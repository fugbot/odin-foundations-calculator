let firstNum;
let operator;
let secondNum;

function operate(operator, num1, num2) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator == "-") {
    subtract(num1, num2);
  } else if (operator == "x") {
    multiply(num1, num2);
  } else if (operator == "/") {
    divide(num1, num2);
  }
}

function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

add(0, 5);
subtract(2, 3);
multiply(2, 4);
divide(10, 2);
operate("add", 5, 3);

const displayOutput = document.querySelector("#display");
let firstDisplayValue = "";
let secondDisplayValue = "";
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals")
const operatorBtn = document.querySelector(".operators")

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  
  btn.addEventListener("click", (e) => {
    if(e.target === clearBtn){
      return;
    }
    if(e.target === operatorBtn){
      operator = `${btn.textContent}`;
      secondDisplayValue += `${btn.textContent}`;
    displayOutput.innerHTML = secondDisplayValue;
    console.log(`Button ${btn.textContent} was clicked`);  
    if(e.target === equalsBtn){
      operate(operator, firstDisplayValue, secondDisplayValue)
    }

    }

    if(e.target === equalsBtn){
      operate(operator, firstDisplayValue, secondDisplayValue)
    }
    
    storeValue(btn);
    
  });
});


function storeValue(clickedBtn){
  firstDisplayValue += `${clickedBtn.textContent}`;
    displayOutput.innerHTML = firstDisplayValue;
    console.log(`Button ${btn.textContent} was clicked`);  
  
}
