function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 10) % 3;
    let result;

    switch(computerChoice) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }

    return result;
}

function getHumanChoice() {
    let humanChoice = prompt("Choice: ").toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        getHumanChoice();
    }
    else {
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw"; // Both choices are the same
    }

    const winningCombinations = {
        rock: "scissors",   // Rock beats scissors
        paper: "rock",      // Paper beats rock
        scissors: "paper",  // Scissors beats paper
    };

    if (winningCombinations[humanChoice] === computerChoice) {
        return "human"; // Human wins
    } else {
        return "computer"; // Computer wins
    }
}

function declareWinner(humanScore, computerScore) {
    if (humanScore === computerScore) {
        console.log ("Draw");
    } else if (humanScore < computerScore) {
        console.log ("Computer Won");
    } else {
        console.log ("You Won");
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let winner = playRound(getHumanChoice(), computerChoice);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        console.log("Computer Choice:");
        console.log(computerChoice);
        console.log("Your Score:");
        console.log(humanScore);
        console.log("Computer Score:");
        console.log(computerScore);
    }
    declareWinner(humanScore, computerScore);
}

playGame();