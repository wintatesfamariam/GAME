function myFunc() {
 
/* function connected to onclick for submit button in html */
 
    const CHOICES = ["rock", "paper", "scissors"];
 
    let computerChoice;
 
    // function to be called by the form on the html
 
    /* randomly choose one of the 3 valid choices and assign it to the @computerChoice variable
     * ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */

    computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
 
    let selectedValue = document.getElementById("gamerchoice").value;
 
    console.log(computerChoice + " : Computers choice")
    console.log(selectedValue + " : Gamers choice")

    function compareValues() {
        if (computerChoice === selectedValue) {
            console.log("It's a tie! ");
        }
        else if (computerChoice === ('rock') && selectedValue === ('paper')) {
            console.log("You win!");
        }
        else if (computerChoice === ('rock') && selectedValue === ('scissors')) {
            console.log("Computer wins!");
        }
        else if (computerChoice === ('paper') && selectedValue === ('scissors')) {
            console.log("You win!");
        }
        else if (computerChoice === ('paper') && selectedValue === ('rock')) {
            console.log("Computer wins!");
        }
        else if (computerChoice === ('scissors') && selectedValue === ('paper')) {
            console.log("Computer wins!");
        }
        else if (computerChoice === ('scissors') && selectedValue === ('rock')) {
            console.log("You win!");
        }
        else {
            console.log("Try again!");
        }
    }
 
    compareValues();
    selectedValue = "";
}