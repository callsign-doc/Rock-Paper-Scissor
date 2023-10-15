let computerChoice;

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

getComputerChoice();



