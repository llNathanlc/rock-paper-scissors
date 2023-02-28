
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;
    if (random == 0) { choice = "paper"; return choice; }
    else if (random == 1) { choice = "rock"; return choice; }
    else if (random == 2) { choice = "scissors"; return choice; }
}
function getPlayerChoice() {
    let choice = prompt("choose between rock, paper or scissors :");
    return choice;
}


function playRound(computer, player) {

    if (computer == "paper" && player == "paper") { return "Tie"; }
    else if (computer == "paper" && player == "scissors") { return "Win"; }
    else if (computer == "paper" && player == "rock") { return "Lose"; }
    else if (computer == "rock" && player == "paper") { return "Win"; }
    else if (computer == "rock" && player == "rock") { return "Tie"; }
    else if (computer == "rock" && player == "scissors") { return "Lose"; }
    else if (computer == "scissors" && player == "paper") { return "Lose"; }
    else if (computer == "scissors" && player == "scissors") { return "Tie"; }
    else if (computer == "scissors" && player == "rock") { return "Win"; }
    else { console.log("invalid input"); }

}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice().toLowerCase();
        let gameState = playRound(computerChoice, playerChoice);
        
        console.log("Round : " + (i + 1));
        console.log("The computer chosed : " + computerChoice);
        console.log("You chosed : " + playerChoice);
        console.log("---------------")

        if (gameState == "Tie") {
            console.log("its a tie!");
            console.log("The computer score is: " + computerScore);
            console.log("The player score is: " + playerScore);
            console.log("------------------------------------")
        }

        else if (gameState == "Win") {
            console.log("You win!");
            playerScore++;
            console.log("The computer score is: " + computerScore);
            console.log("The player score is: " + playerScore);
            console.log("------------------------------------")
        }
        else if (gameState == "Lose") {
            console.log("You lose :(");
            computerScore++;
            console.log("The computer score is: " + computerScore);
            console.log("The player score is: " + playerScore);
            console.log("------------------------------------");
        }
    }

    if (playerScore > computerScore) { console.log("You won the match!"); }
    else if (playerScore == computerScore) {console.log("Its a tie!");}
    else if(playerScore < computerScore){console.log("You lost :(");}
    console.log("------------------------------------")
}

game();