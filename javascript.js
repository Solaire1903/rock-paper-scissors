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
        switch(humanChoice) {
            case computerChoice:
                console.log("It's a tie!");
                break;

            case "rock":
                if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
                }
                else {
                    console.log("You win! Rock beats Scissors");
                    humanScore++;
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    console.log("You win! Paper beats Rock");
                    humanScore++;
                }
                else {
                    console.log("You lose! Scissors beats Paper");
                    computerScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You lose! Rock beats Scissors");
                    computerScore++;
                }
                else {
                    console.log("You win! Scissors beats Paper");
                    humanScore++;
                }
                break;
        }
    }

    const body = document.querySelector("body");
    const buttons = document.querySelector("#buttons");
    const result = document.createElement("div");

    buttons.addEventListener("click", (e) => {
        const target = e.target;

        switch(target.id) {
            case "buttonRock":
                playRound("rock", getComputerChoice());
                break;
            case "buttonPaper":
                playRound("paper", getComputerChoice());
                break;
            case "buttonScissors":
                playRound("scissors", getComputerChoice());
                break;        
        }
    })

    let humanScore = 0;
    let computerScore = 0;

    if (humanScore === computerScore) {
        console.log("Game ends with a tie!");
    }
    else {
        console.log(humanScore > computerScore ? "Player wins!" : "Computer wins!");
    }
}

playGame();