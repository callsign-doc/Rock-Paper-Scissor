// declare variable
let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

let attempt = 0;
let gameOver = function(attempt) {
    if (attempt < 5) {
        return false;
    } else {
        return true;
    }
};

const playerChoiceOptions = document.getElementById('choiceOptions');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const retryButton = document.getElementById('retryBtn');
retryButton.disabled = true;

const playerChoiceUI = document.getElementById('playerChoice');
const computerChoiceUI = document.getElementById('computerChoice');
const attemptCounterUI = document.getElementById('attemptCounter');

const announcement = document.getElementById('announcement');
const playerScoreUI = document.getElementById('playerScore');
const computerScoreUI = document.getElementById('computerScore');

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

function determineResult(playerChoice, computerChoice) {
    // states both parties choice
    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);
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
}

function updateComputerChoiceUI() {
    getComputerChoice();
    switch (computerChoice) {
        case 'Rock':
            computerChoiceUI.textContent = '🪨';
            break;
        case 'Paper':
            computerChoiceUI.textContent = '🧻';
            break;
        case 'Scissors':
            computerChoiceUI.textContent = '✂️';
            break;
    }
}

 function evaluateRoundResult() {
    updateComputerChoiceUI();
    
    let result = determineResult(playerChoice, computerChoice);
    announcement.textContent = result;
    playerScoreUI.textContent = 'Player: ' +playerScore;
    computerScoreUI.textContent = 'Computer: ' + computerScore;
    
    attempt += 1;
    attemptCounterUI.textContent = attempt;
 }

retryButton.addEventListener('click', ()=> {
    attempt = 0;
    playerScore = 0;
    computerScore = 0;

    announcement.textContent = 'Play 5 rounds!';
    playerScoreUI.textContent = 'Player: ' +playerScore;
    computerScoreUI.textContent = 'Computer: ' + computerScore;
    attemptCounterUI.textContent = attempt;

    retryButton.disabled = true;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
})

playerChoiceOptions.addEventListener('click', (event)=> {
    let buttonSelected = event.target.id;
    
    switch (buttonSelected) {
        case 'rockButton':
            playerChoice = 'Rock';
            playerChoiceUI.textContent = '🪨';
            evaluateRoundResult();
            break;
        case 'paperButton':
            playerChoice = 'Paper';
            playerChoiceUI.textContent = '🧻';
            evaluateRoundResult();
            break;
        case 'scissorsButton':
            playerChoice = 'Scissors';
            playerChoiceUI.textContent = '✂️';
            evaluateRoundResult();
            break;
        default:
            break;
    }
    console.log(`Player selected ${playerChoice}`)


    if (gameOver(attempt)) {
        retryButton.disabled = false;
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        let winner = function(playerScore, computerScore) {
            if (playerScore > computerScore) {
                return 'Player wins!';
            } else if (playerScore < computerScore) {
                return 'Computer wins!';
            } else {
                return 'Issa tie man!';
            }
        }
        announcement.textContent = winner(playerScore, computerScore);
    } else {
        retryButton.disabled = true;
    }
})





