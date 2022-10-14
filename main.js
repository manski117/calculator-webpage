
//Code below sends stuff to display
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
  