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

function playRound() {
    if (playerChoice.textContent === computerChoice.textContent) {
        return "draw"; // Both choices are the same
    }

    const winningCombinations = {
        Rock: "Scissors",   // Rock beats scissors
        Paper: "Rock",      // Paper beats rock
        Scissors: "Paper",  // Scissors beats paper
    };

    if (winningCombinations[playerChoice.textContent] === computerChoice.textContent) {
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

function updatePoints (roundWinner) {
    if (roundWinner === "player") playerPoints.textContent = Number(playerPoints.textContent) + 1;
    else if (roundWinner === "computer") computerPoints.textContent = Number(computerPoints.textContent) + 1;
}

// function checkWinner (playerPointsPointer, computerPointsPointer) {
//     let  = "none";
//     if (playerPointsPointer.textContent == 5) {
//         playerPointsPointer.textContent = 0;
//         computerPointsPointer.textContent = 0;
//         return "You Won the Game!!!";
//     if (computerPointsPointer.textContent == 5) return "You Lost the Game";

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
    let roundWinner = playRound();
    winnerDeclaration.textContent = declareRoundWinner(roundWinner);
    updatePoints(roundWinner);
    // gameWinner.textContent = checkWinner(playerPoints, computerPoints);
});

