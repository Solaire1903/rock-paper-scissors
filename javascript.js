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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        switch(humanChoice) {
            case computerChoice:
                results.textContent = "It's a tie!";
                break;

            case "rock":
                if (computerChoice === "paper") {
                    results.textContent = "You lose! Paper beats Rock";
                    computerScore++;
                }
                else {
                    results.textContent = "You win! Rock beats Scissors";
                    humanScore++;
                }
                break;

            case "paper":
                if (computerChoice === "rock") {
                    results.textContent = "You win! Paper beats Rock";
                    humanScore++;
                }
                else {
                    results.textContent = "You lose! Scissors beats Paper";
                    computerScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "rock") {
                    results.textContent = "You lose! Rock beats Scissors";
                    computerScore++;
                }
                else {
                    results.textContent = "You win! Scissors beats Paper";
                    humanScore++;
                }
                break;
        }
    }

    const body = document.querySelector("body");
    const buttons = document.querySelector("#buttons");
    const results = document.querySelector("#results");

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