// declare variable
let computerChoice;
// player pick choice
let playerChoice = prompt("Please pick your choice.");
let isInputValid;

//DEFINE: computer make choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber == 0) {
        computerChoice = 'Rock';
    } else if (randomNumber == 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    console.log(computerChoice);
}

// DEFINE FUNCTION: check input validity of player
function checkInputValidity(x) {
    if (typeof x === 'string' ) {
        let firstChar = x.charAt(0).toUpperCase();
        let charAfterZero = x.slice(1).toLowerCase();

        playerChoice = firstChar + charAfterZero;

        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice == "Scissors") {
            isInputValid = true;
        } else {
            isInputValid = false;
            console.log('Player input is valid');
        }
    }
}

//function to start round
function playRound(playerChoice, computerChoice) {
    // states both parties choice
    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);

    // check who wins
    if (isInputValid) {  
        switch (playerChoice) {
            case "Rock":
              switch (computerChoice) {
                case "Rock":
                  console.log("It's a tie!");
                  break;
                case "Paper":
                  console.log("Computer wins!");
                  break;
                case "Scissors":
                  console.log("Player wins!");
                  break;
              }
              break;
          
            case "Paper":
              switch (computerChoice) {
                case "Rock":
                  console.log("Player wins!");
                  break;
                case "Paper":
                  console.log("It's a tie!");
                  break;
                case "Scissors":
                  console.log("Computer wins!");
                  break;
              }
              break;
          
            case "Scissors":
              switch (computerChoice) {
                case "Rock":
                  console.log("Computer wins!");
                  break;
                case "Paper":
                  console.log("Player wins!");
                  break;
                case "Scissors":
                  console.log("It's a tie!");
                  break;
              }
              break;
          
            default:
              console.log("Invalid choice. Please choose 'Rock', 'Paper', or 'Scissors'.");
              break;
          }   



        /*
        if (playerChoice === 'Rock') {
            console.log('This ROCKS yo')
        }
        console.log('input is valid yo');

    } else {
        console.log('input INVALID YO!');
        */
    }
};


// START ROUND
getComputerChoice();
checkInputValidity(playerChoice);
playRound(playerChoice, computerChoice);






