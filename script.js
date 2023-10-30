// declare variable
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let attempt = 0;

// player pick choice
let playerChoice;
let isInputValid;


const playerChoiceOptions = document.getElementById('choiceOptions');

playerChoiceOptions.addEventListener('click', (event)=> {
    let buttonSelected = event.target.id;

    switch (buttonSelected) {
        case 'rockButton':
            playerChoice = 'Rock';
            break;
        case 'paperButton':
            playerChoice = 'Paper';
            break;
        case 'scissorsButton':
            playerChoice = 'Scissors'
    }

    console.log(`Player selected ${playerChoice}`)
})



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
        let result;
        // Use a nested switch to determine the winner based on playerChoice and computerChoice
        switch (playerChoice) {
            case "Rock":
            switch (computerChoice) {
                case "Rock":
                result = "TIE";
                break;
                case "Paper":
                result = "LOSE";
                computerScore += 1;
                break;
                case "Scissors":
                result = "WIN";
                playerScore += 1;
                break;
            }
            break;

            case "Paper":
            switch (computerChoice) {
                case "Rock":
                result = "WIN";
                playerScore += 1;
                break;
                case "Paper":
                result = "TIE";
                break;
                case "Scissors":
                result = "LOSE";
                computerScore += 1;
                break;
            }
            break;

            case "Scissors":
            switch (computerChoice) {
                case "Rock":
                result = "LOSE";
                computerScore += 1;
                break;
                case "Paper":
                result = "WIN";
                playerScore += 1;
                break;
                case "Scissors":
                result = "TIE";
                break;
            }
            break;
        }
        return result;

    } else {
        return 'INVALID INPUT';
    }
    
}

//DECLARE FUNCTION: game() or start round
function game() {
    //reask player choice
    playerChoice = prompt("Please pick your choice.");

    //new computer choice
    getComputerChoice();

    checkInputValidity(playerChoice);
    console.log(playRound(playerChoice, computerChoice));

    attempt += 1;
    if (attempt == 5) {
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);

        if (playerScore > computerScore) {
            console.log('GAME OVER: Player win');
        } else if (playerScore == computerScore) {
            console.log('ITS A TIE');
        } else {
            console.log('GAME OVER: Computer win gg ez')
        }
    }
}

// START ROUND
// game()
// game()
// game()
// game()
// game()






