const CHOICES = ["rock", "paper", "scissors"];

let computerChoice;

// function to be called by the form on the html
const submit = function () {
  /* randomly choose one of the 3 valid choices and assign it to the @computerChoice variable
   * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

function getSelectValue() {
  let selectedValue = document.getElementById("gamerchoice").value;
}

function compareValues() {
  if (computerChoice === selectedValue) {
    console.log("It's a tie! ");
  }

  if else (computerChoice === ('rock') && selectedValue === ('paper')) {
    console.log("You win!");
  }
  if else (computerChoice === ('rock') && selectedValue === ('scissor')) {
    console.log("Computer wins!");
  }
  if else (computerChoice === ('paper') && selectedValue === ('scissor')) {
    console.log("You win!");
  }
  if else (computerChoice === ('paper') && selectedValue === ('rock')) {
    console.log("Computer wins!");
  }
  if else (computerChoice === ('scissor') && selectedValue === ('paper')) {
    console.log("Computer wins!");
  }
  if else (computerChoice === ('scissor') && selectedValue === ('rock')) {
    console.log("You win!");
  }
  else {
  console.log("Try again!");
  }
}
  

compareValues();