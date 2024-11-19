function checkNewGame () {
    if (playerPoints.textContent == 5 || computerPoints.textContent == 5) {
        playerPoints.textContent = 0;
        computerPoints.textContent = 0;
    }
}

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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw"; // Both choices are the same
    }

    const winningCombinations = {
        Rock: "Scissors",   // Rock beats scissors
        Paper: "Rock",      // Paper beats rock
        Scissors: "Paper",  // Scissors beats paper
    };

    if (winningCombinations[playerChoice] === computerChoice) {
        return "player"; // Human wins
    } else {
        return "computer"; // Computer wins
    }
}

function declareRoundWinner (roundwinner) {
    if (roundwinner === "draw") return "Empate";
    if (roundwinner === "player") return "Você Ganhou!";
    if (roundwinner === "computer") return "Você Perdeu";
}

function updatePoints (roundWinner) {
    if (roundWinner === "player") playerPoints.textContent = Number(playerPoints.textContent) + 1;
    else if (roundWinner === "computer") computerPoints.textContent = Number(computerPoints.textContent) + 1;
}

function checkWinner () {
    if (playerPoints.textContent == 5) return "Você Ganhou o Jogo!!!"; 
    else if (computerPoints.textContent == 5) return "Você Perdeu o Jogo";
}

function updateImagesFightRound (playerChoiceString, computerChoiceString) {
    const imagesSrc = {
        Rock: "./images/rock.png",
        Paper: "./images/paper.png",
        Scissors: "./images/scissors.png"
    };

    const imagesAlt = {
        Rock: "Rock",
        Paper: "Paper",
        Scissors: "Scissors"
    }

    playerChoice.src = imagesSrc[playerChoiceString];
    playerChoice.alt = imagesAlt[playerChoiceString];

    computerChoice.src = imagesSrc[computerChoiceString];
    computerChoice.alt = imagesAlt[computerChoiceString];
}

const playerOptions = document.querySelector("#playerOptions");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const winnerDeclaration = document.querySelector("#winnerDeclaration");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const gameWinner = document.querySelector("#gameWinner");

playerOptions.addEventListener("click", (event) => {
    checkNewGame();
    let target = event.target;
    if (target.tagName === "DIV") stopImadiatePropagation();
    let playerChoiceString = target.id;
    let computerChoiceString = getComputerChoice();
    updateImagesFightRound(playerChoiceString, computerChoiceString);
    let roundWinner = playRound(playerChoiceString, computerChoiceString);
    winnerDeclaration.textContent = declareRoundWinner(roundWinner);
    updatePoints(roundWinner);
    gameWinner.textContent = checkWinner();
});

