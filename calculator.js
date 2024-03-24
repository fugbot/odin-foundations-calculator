let firstNum;
let operator;
let secondNum;
let finalResult = 0;

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
  result = a+b;
  return result;
}

function subtract(a, b) {
  return (a - b);
}

function multiply(a, b) {
  return (a * b);
}

function divide(a, b) {
  return (a / b);
}

const displayElem = document.querySelector("#display");
let displayValueWithZero = displayElem.innerHTML;
let displayValue = "";
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals")
const operatorBtn = document.querySelector(".operators")

const numBtns = document.querySelectorAll(".numbers button");
numBtns.forEach((numBtn) => {  
  numBtn.addEventListener("click", (e) => {
    if(e.target === clearBtn){
      displayElem.innerHTML = "0";
      resetValue();
      return;
      //todo: clear everything - firstDisplayValue
    }    
    displayNumbers(numBtn);
    
    operatorBtns.forEach((operatorBtn) => {
      operatorBtn.addEventListener("click", (e) => {
          //storeValue()
          if(e.target === equalsBtn){
            console.log("clicked equals hereeeee")
            secondNum = Number(displayElem.innerHTML);
            console.log("operator: " + operator);
            console.log("first num: " + firstNum);
            console.log("second num: " + secondNum);
            finalResult = operate(operator, firstNum, secondNum);
            console.log(finalResult);
            return finalResult;
          }
          //try to exit from parent function
          if(finalResult)return;

          firstNum = Number(displayElem.innerHTML);
          //storeValue();
          resetValue();
          displayElem.innerHTML = `${operatorBtn.textContent}`;
          operator = `${operatorBtn.textContent}`;
          console.log(`Button ${operatorBtn.textContent} was clicked`); 
          
      })
  })
  
  });
});

function displayFinalResult(finalResult){
  displayElem.innerHTML = finalResult;
}

const operatorBtns = document.querySelectorAll(".operators button")


//function displayValue

function resetValue(){
  displayValue = "0";
}

function storeValue(){

}

function displayNumbers(clickedBtn){
  if(displayValue === "0"){
    displayValue = "";
  }
    displayValue += `${clickedBtn.textContent}`;
    displayElem.innerHTML = displayValue;
    console.log(`Button ${clickedBtn.textContent} was clicked`); 
    //return firstDisplayValue; 
  
}
