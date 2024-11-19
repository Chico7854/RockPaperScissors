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
        return "draw"; // Both choices are the same
    }

    const winningCombinations = {
        Rock: "Scissors",   // Rock beats scissors
        Paper: "Rock",      // Paper beats rock
        Scissors: "Paper",  // Scissors beats paper
    };

    if (winningCombinations[humanChoice] === computerChoice) {
        return "player"; // Human wins
    } else {
        return "computer"; // Computer wins
    }
}

function declareRoundWinner (roundwinner) {
    if (roundwinner === "draw") return "Draw";
    if (roundwinner === "player") return "You Won!";
    if (roundwinner === "computer") return "You Lost";
}

function updatePoints (roundWinner, playerPointsPointer, computerPointsPointer) {
    if (roundWinner === "player") playerPointsPointer.textContent = Number(playerPointsPointer.textContent) + 1;
    else if (roundWinner === "computer") computerPointsPointer.textContent = Number(computerPointsPointer.textContent) + 1;
}

// function checkWinner (playerPoints, computerPoints) {
//     if (playerPoints === 5) 
// }

const playerOptions = document.querySelector("#playerOptions");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const winnerDeclaration = document.querySelector("#winnerDeclaration");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const gameWinner = document.querySelector("#gameWinner");

playerOptions.addEventListener("click", (event) => {
    let target = event.target;
    playerChoice.textContent = target.textContent;
    computerChoice.textContent = getComputerChoice();
    let roundWinner = playRound(playerChoice.textContent, computerChoice.textContent);
    winnerDeclaration.textContent = declareRoundWinner(roundWinner);
    updatePoints(roundWinner, playerPoints, computerPoints);
});

