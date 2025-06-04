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

let humanScore = 0;
let computerScore = 0;