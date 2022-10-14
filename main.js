///////GLOBAL VARIABLES/////////////
let currentAnswer = undefined;
//by default, before a second number is typed by user, the "current answer" will be undefined.
//the job of currentAnswer is to be taken in recursively by the math operations.
let currentNumber = 2;
//this number will be updated every time an operation button is pressed. 




//////OPERATION FUNCTIONS//////////////////
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

function subtract(minuend, subtrahend) {
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
  
  
  
function divide (dividend, divisor){
    let dend;
    let visor;
    dend = dividend;

    //seperate if-statement to make sure it is not 0. 0 is not the default value of currentAnswer for a reason. 
    if (divisor == 0) return "ERROR: NO / BY 0";
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
  




function operate (num1, num2, arg3){
    return(arg3(num1, num2));
    //use this to call whatever function you want against the total so far and the most recent user typed number
    //even if currentAnswer is undefined, the functions will have an if-block to expect that
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
    display.innerText = currentDisplay + " " + string;
  
  }
  
  function clearDisplay(){
    //replace existing text with a blank string
    let display = document.querySelector("#display");
    let currentDisplay = display.innerText = "";
  }
  