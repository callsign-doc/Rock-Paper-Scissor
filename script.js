// declare variable
let computerChoice = ['Rock', 'Paper', 'Scissor'];
// player pick choice
let playerChoice = prompt("Please pick your choice.") 
let isInputValid;

//computer make choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    if (randomNumber == 0 || randomNumber == 1) {
        computerChoice = 'Rock';
    } else if (randomNumber == 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissor';
    }
    console.log(computerChoice);
}

// DEFINE FUNCTION: check input validity of player
function checkInputValidity(playerChoice) {
    if (typeof playerChoice === 'string' ) {
        let firstChar = playerChoice.charAt(0).toUpperCase();
        let charAfterZero = playerChoice.slice(1).toLowerCase();

        playerChoice = firstChar + charAfterZero;

        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice == "Scissor") {
            isInputValid = true;
        } else {
            isInputValid = false;
            console.log('Player input is valid');
        }
    };
};

//function to start round
function playRound(playerChoice, computerChoice) {
    checkInputValidity(playerChoice);

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
        if (playerChoice === 'Rock' && computerChoice)
        console.log('input is valid yo');

    } else {
        console.log('input INVALID YO!');
        */
    }

    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);
};


// START ROUND
getComputerChoice();
playRound(playerChoice, computerChoice);






