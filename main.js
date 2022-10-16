///////GLOBAL VARIABLES/////////////
let currentAnswer = undefined;
//by default, before a second number is typed by user, the "current answer" will be undefined.
//the job of currentAnswer is to be taken in recursively by the math operations.
let currentNumber = undefined;
//this number will be updated every time an operation button is pressed. Holds second opperand.
let prevNumber = undefined;
//holds the first opperand
let currentOpp = undefined;
//lastOpp stores the last opperator used so that the "=" button can know what the final compute is 
let lastOpp =undefined;
//is the answer being displayed or are you typing in a statement?
let answerDisplayed = false;



//update the currentNumber when the user presses a number
function appendCurrentNumber(num){
  //append the number the user typed onto an empty or int global variable
  
  if (currentNumber == undefined){
    currentNumber = num;
    
    
  } else if (Number.isInteger(currentNumber)){
    let tempString = num.toString();
    //must be made into a string temporarily to append num to the end.
    currentNumber = parseInt(currentNumber) + tempString;
    currentNumber = parseInt(currentNumber);
    
    //converted back to number in the global var
    
  } else{
    alert("ERROR: check currentNumber")
  }
}

function initializeCurrentAnswer(){
  //sets the currentAnswer to the first current number if it is not yet defined.
  //this function is critical to ensuring that multiple-integer expressions are possible. 
  if (Number.isInteger(currentAnswer)) return;
  if (!Number.isInteger(currentAnswer)){
    currentAnswer = currentNumber;
  }
}

//////OPERATION FUNCTIONS//////////////////
function operate (num1, num2, arg3){
    return(arg3(num1, num2));
    //use this to call whatever function you want against the total so far and the most recent user typed number
    //even if currentAnswer is undefined, the functions will have an if-block to expect that
}

function add(addend1, addend2){
    let num1 = addend1
    let num2
    //sets default value if no running total yet exists
    if (addend2 == undefined){
        num2 = 0;
    } else{
        num2 = addend2;
    }
    let sum = num1 + num2;
    currentAnswer = sum; //updates current answer so future operate() calls can use the running total
    return sum;
    
}


function subtract(subtrahend, minuend) {
    //subtracts the first arg by the second arg
    let num1 = minuend;
    let num2;
    if (subtrahend == undefined){
      num2 = 0;
    } else{
      num2 = subtrahend;
    }
    let dif = (num1 - num2);
    currentAnswer = dif;  //updates current answer so future operate() calls can use the running total
      return dif;
    
  };
  
  
  
  function multiply(multiplicand, multiplier){
    //multiplies first arg by second arg
    let num1= multiplicand;
    //if statement makes sure it does not return error if no second number as been entered by the user. 
    let num2
    if (multiplier == undefined){
      num2 = 1;
    } else{
      num2 = multiplier;
    }
    
    let product = (num1 * num2);
    currentAnswer = product;  //updates current answer so future operate() calls can use the running total
    return product;
  }
  
  
  
function divide (divisor, dividend){
    let dend;
    let visor;
    dend = dividend;

    //seperate if-statement to make sure it is not 0. 0 is not the default value of currentAnswer for a reason. 
    if (divisor == 0) {
      displayThisThing("ERROR: NO / BY 0")
      alert("ERROR: Cannot divide by zero");
      clearAll();
      return;
    }
    //if statement makes sure it does not return error if no second number as been entered by the user. 
    if (divisor == undefined){
      visor = 1;
    } else{
      visor = divisor;
    }
    let quotient = (dend / visor);
    currentAnswer = quotient;  //updates current answer so future operate() calls can use the running total
    return quotient;
  }
  









////FUNCTIONS USED TO UPDATE DISPLAY///////////
function displayThisThing (string){
  //replaces the whole readout with whatever the passed in string is
  let display = document.querySelector("#display");
  display.style.color = "red";
  display.innerText = string;
}

function addToDisplay (string){
  //adds the passed in string to the end of the display readout
  let display = document.querySelector("#display");
  //get the current string that is displayed with .innerText
  let currentDisplay = display.innerText;
  display.style.color = "red";
  //add the new string to the old string
  if (currentNumber == undefined){
    display.innerText = currentDisplay + "  " + string;
  } else{
  display.innerText = currentDisplay + "" + string;
    }
}

function clearDisplay(){
  //replace existing text with a blank string
  let display = document.querySelector("#display");
  let currentDisplay = display.innerText = "";
}
function clearCurrentNumber(){
  currentNumber = undefined;
}
function clearLastOpp(){
  lastOpp = undefined;
}

function clearAll(){
  clearDisplay();
  clearLastOpp();
  currentNumber = undefined;
  currentAnswer = undefined;
  answerDisplayed = false;

}

function newExpression(){
  //makes screen automatically clear if user starts to type a new expression while their previous answer is still displayed.
  if (answerDisplayed == true){
    clearAll();
  } else{
    return;
  }
}


////////////////BUTTON FUNCTION SWITCHBOARD///////////////////////////
//switch block gets id from button click and runs function based on id
const onClick = function() {

switch (this.id){
  case "zero":
    newExpression();
    appendCurrentNumber(0);
    addToDisplay("0");
    
    break;
  case "one":
    newExpression();
    appendCurrentNumber(1);
    addToDisplay("1");
    
    break;
    
  case "two":
    newExpression();
    appendCurrentNumber(2);
    addToDisplay("2");
    
    break;
    
  case "three":
    newExpression();
    appendCurrentNumber(3);
    addToDisplay("3");
    
    break;
  case "four":
    newExpression();
    appendCurrentNumber(4);
    addToDisplay("4");
    
    break;
    
  case "five":
    newExpression();
    appendCurrentNumber(5);
    addToDisplay("5");
    
    break;
    
  case "six":
    newExpression();
    appendCurrentNumber(6);
    addToDisplay("6");
    
    break;
  case "seven":
    
    appendCurrentNumber(7);
    addToDisplay("7");
    
    break;
    
  case "eight":
    newExpression();
    appendCurrentNumber(8);
    addToDisplay("8");
    
    break;
    
  case "nine":
    newExpression();
    appendCurrentNumber(9);
    addToDisplay("9");
    
    break;

  case "decimal":
    alert("you pressed .");
    alert("ERROR: FUNCTIONALITY NOT YET ADDED");
    newExpression();
    addToDisplay(".");
    
    break;
    
  case "clear":
    
    clearAll();
    break;
  
  case "test-button-2":
    alert("FUNCTIONALITY NOT YET ADDED");
    break;
    
  case "test-button-3":
    alert("FUNCTIONALITY NOT YET ADDED");
    break;

  case "plus":
    plus();   
    break;

  case "minus":
    minus();   
    break;
      
  case "times":
    times();   
    break;
  
  case "division":
    division();   
    break;

  case "equals":
    equals();   
    break;


  default:
    alert("you messed up");
   
}
}
///////All buttons mapped by id to run an onClick function////////
document.getElementById('zero').onclick = onClick;
document.getElementById('one').onclick = onClick;
document.getElementById('two').onclick = onClick;
document.getElementById('three').onclick = onClick;
document.getElementById('four').onclick = onClick;
document.getElementById('five').onclick = onClick;
document.getElementById('six').onclick = onClick;
document.getElementById('seven').onclick = onClick;
document.getElementById('eight').onclick = onClick;
document.getElementById('nine').onclick = onClick;  
document.getElementById('clear').onclick = onClick;
document.getElementById('test-button-2').onclick = onClick;
document.getElementById('test-button-3').onclick = onClick;
document.getElementById('plus').onclick = onClick;
document.getElementById('minus').onclick = onClick;
document.getElementById('times').onclick = onClick;
document.getElementById('division').onclick = onClick;
document.getElementById('equals').onclick = onClick;
document.getElementById('decimal').onclick = onClick;



//////////Button Functions////////////////
//these functions work by calling the LAST opperator and expression when they themselves are pressed. 
function plus(){ 
  
  initializeCurrentAnswer();
  
  currentOpp = add;
  addToDisplay(" + ");
  
  if (lastOpp != undefined){
    operate(currentNumber, currentAnswer, lastOpp);
  } else{
    console.log("lastOpp not yet defined");
  }
  
  lastOpp = currentOpp;
  clearCurrentNumber();
  
}

function minus(){ 
  
  initializeCurrentAnswer();
  
  currentOpp = subtract;
  addToDisplay(" - ");
  
  if (lastOpp != undefined){
    operate(currentNumber, currentAnswer, lastOpp);
  } else{
    console.log("lastOpp not yet defined");
  }
  
  lastOpp = currentOpp;
  
  clearCurrentNumber();
  
}

function times(){ 
  
  initializeCurrentAnswer();
  
  currentOpp = multiply;
  addToDisplay(" X ");
  
  if (lastOpp != undefined){
    operate(currentNumber, currentAnswer, lastOpp);
  } else{
    console.log("lastOpp not yet defined");
  }
  
  lastOpp = currentOpp;
  
  clearCurrentNumber();
  
}

function division(){ 
  
  initializeCurrentAnswer();
  currentOpp = divide;
  addToDisplay(" / ");
  
  if (lastOpp != undefined){
    operate(currentNumber, currentAnswer, lastOpp);
  } else{
    console.log("lastOpp not yet defined");
  }
  
  lastOpp = currentOpp;
  
  clearCurrentNumber();
}

function equals(){
  
  currentOpp = equals;
   
  if (lastOpp != undefined){
    operate(currentNumber, currentAnswer, lastOpp);
  } else{
    console.log("lastOpp not yet defined");
  }
  
  lastOpp = currentOpp;
  clearDisplay();
  //this if-statement prevents an error if equals is pressed before the first opperator
  if (currentAnswer == undefined){
    displayThisThing(currentNumber);
    answerDisplayed = true;
  } else{
    clearCurrentNumber();
    displayThisThing(currentAnswer);
    answerDisplayed = true;
  }
  

}

