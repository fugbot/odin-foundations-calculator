let firstNum = "";
let operator = "";
let secondNum = "";
let finalResult = undefined;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error";
  }
}

const displayElem = document.querySelector("#display");
let displayValueWithZero = displayElem.innerHTML;
let displayValue = "";
const clearBtn = document.querySelector("#clear");

const operatorBtns = document.querySelectorAll(".operators button")
//const operatorBtn = document.querySelector(".operators")
const equalsBtn = document.querySelector("#equals")

const numBtns = document.querySelectorAll(".numbers button");
numBtns.forEach((numBtn) => {  
  numBtn.addEventListener("click", (e) => {
    displayNumbers(numBtn);
  });
});

clearBtn.addEventListener("click", () => {
    displayElem.innerHTML = "0";
    firstNum = "";
    secondNum = "";
    operator = "";
    resetValue();
})

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
      if(firstNum === ""){
        //firstNum = displayElem.innerHTML;
        firstNum = storeValue();
        resetValue();
        displayElem.innerHTML = `${operatorBtn.textContent}`;
      operator = `${operatorBtn.textContent}`;
      console.log(`Button ${operatorBtn.textContent} was clicked`); 
      } else if (secondNum === "" && operator === ""){
        displayElem.innerHTML = `${operatorBtn.textContent}`;
      operator = `${operatorBtn.textContent}`;
      console.log(`Button ${operatorBtn.textContent} was clicked AGAIN`); 
      //todo: how to store second number in second run
      }    
      
  })
})

equalsBtn.addEventListener("click", () => {
  if(firstNum !== "" || secondNum !== "" || operator !== ""){
    secondNum = Number(displayElem.innerHTML);
    // console.log("operator: " + operator);
    // console.log("first num: " + firstNum);
    // console.log("second num: " + secondNum);
    finalResult = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
    displayElem.innerHTML = finalResult;
    firstNum = finalResult;
    secondNum = "";
    operator = ""
  }    
})

function resetValue(){
  displayValue = "0";
}

function storeValue(){
  return displayElem.innerHTML;
}

function displayNumbers(clickedBtn){
  if(displayValue === "0"){
    displayValue = "";
  }
    displayValue += `${clickedBtn.textContent}`;
    displayElem.innerHTML = displayValue;
    console.log(`Button ${clickedBtn.textContent} was clicked`); 
}
