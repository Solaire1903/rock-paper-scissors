function getComputerChoice() {
    let choice = Math.random();

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
    let choice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        return null;
    }

    return choice;
}