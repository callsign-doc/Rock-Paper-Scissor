let computerChoice;
let playerChoice = prompt("Please pick your choice.")

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
function isInputValid(x) {
    if (typeof x === 'string' ) {
        let firstChar = x.charAt[0];
        let charAfterZero = x.slice(1);

        playerChoice = firstChar + charAfterZero;

        if (x === 'Rock' || x === 'Paper' || x == "Scissor") {
            return true;
            console.log('Player input is valid');
        } else {
            return false;
        }
    };
};

function playRound(playerChoice, computerChoice) {
    if isInputValid(playerChoice) {
        console.log('Yes i checked once more, the input is valid')
    }

    console.log("Player choice is " + playerChoice);
    console.log("Computer choice is " + computerChoice);
};



getComputerChoice();
playRound(playerChoice, computerChoice);






