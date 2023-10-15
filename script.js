let computerChoice;
let playerChoice = prompt("Please pick your choice.")
let isInputValid;

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

/* 
player select choice
compare choice against computer
determine who wins against player and computer chocies
*/
function checkInputValidity(playerChoice) {
    if (typeof playerChoice === 'string' ) {
        let firstChar = playerChoice.charAt[0];
        let charAfterZero = playerChoice.slice(1);

        playerChoice = firstChar + charAfterZero;

        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice == "Scissor") {
            isInputValid = true;
        } else {
            isInputValid = false;
            console.log('Player input is valid');
        }
    };
};

function playRound(playerChoice, computerChoice) {
    if (isInputValid) {
        console.log('input is valid yo');
    } else {
        console.log('input INVALID YO!');
    }

    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);
};



getComputerChoice();
playRound(playerChoice, computerChoice);






