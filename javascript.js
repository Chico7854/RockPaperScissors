function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10) % 3;
    let result;

    switch(computerChoice) {
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
    }

    return result;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw"; // Both choices are the same
    }

    const winningCombinations = {
        Rock: "Scissors",   // Rock beats scissors
        Paper: "Rock",      // Paper beats rock
        Scissors: "Paper",  // Scissors beats paper
    };

    if (winningCombinations[humanChoice] === computerChoice) {
        return "You Won"; // Human wins
    } else {
        return "Computer Won"; // Computer wins
    }
}

const playerOptions = document.querySelector("#playerOptions");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const winnerDeclaration = document.querySelector("#winnerDeclaration");

playerOptions.addEventListener("click", (event) => {
    let target = event.target;
    playerChoice.textContent = target.textContent;
    computerChoice.textContent = getComputerChoice();
    winnerDeclaration.textContent = playRound(playerChoice.textContent, computerChoice.textContent);
});