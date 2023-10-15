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
            console.log('INVALID INPUT');
        }
    }
}

//function to start round
function playRound(playerChoice, computerChoice) {
    // states both parties choice
    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);

    if (isInputValid) {  
      switch (playerChoice) {
        case "Rock":
          switch (computerChoice) {
            case "Rock":
              return "TIE";
            case "Paper":
              return "LOSE";
            case "Scissors":
              return "WIN";
          }
          break;
  
        case "Paper":
          switch (computerChoice) {
            case "Rock":
              return "WIN";
            case "Paper":
              return "TIE";
            case "Scissors":
              return "LOSE";
          }
          break;
  
        case "Scissors":
          switch (computerChoice) {
            case "Rock":
              return "LOSE";
            case "Paper":
              return "WIN";
            case "Scissors":
              return "TIE";
          }
          break;
      }
    } else {
      return 'INVALID INPUT';
    }
  }


// START ROUND
getComputerChoice();
checkInputValidity(playerChoice);
console.log(playRound(playerChoice, computerChoice));






