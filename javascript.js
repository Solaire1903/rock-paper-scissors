function getComputerChoice() {
    const choice = Math.random();

    if (choice <= 0.33) {
        return "rock";
    }
    else if (choice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        return null;
    }

    return choice;
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === null) {
            console.log("Invalid input");
            return;
        }

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }    

        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            else {
                console.log("You win! Rock beats Scissors");
                humanScore++;
            }
        }

        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            }
            else {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
        }
        
        if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            }
            else {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            }
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore === computerScore) {
        console.log("Game ends with a tie!");
    }
    else {
        console.log(humanScore > computerScore ? "Player wins!" : "Computer wins!");
    }
}

playGame();