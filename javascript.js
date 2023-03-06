
const userInput = document.getElementById("userInput");
const round = document.getElementById('round');
const buttons = document.querySelectorAll("div.buttons button");
const gameText = document.getElementById("gameState");
const restart = document.querySelector('#restart');
const whoWon = document.querySelector("#whoWon");
const scores = document.querySelector("#scores");
const computerChoiceText = document.getElementById("computerChoice");
const playerChoiceText = document.getElementById("playerChoice");
const computerScoreText = document.getElementById("computerScore");
const playerScoreText = document.getElementById("playerScore");
whoWon.setAttribute('style', 'white-space: pre;');
gameText.setAttribute('style', 'white-space: pre;');
scores.setAttribute('style', 'white-space: pre;');
round.setAttribute('style', 'white-space: pre;');
let computerScore = 0;
let playerScore = 0;
let roundCont = 0;


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;
    if (random == 0) { choice = "paper"; return choice; }
    else if (random == 1) { choice = "rock"; return choice; }
    else if (random == 2) { choice = "scissors"; return choice; }
}

function gameState(computer, player) {

    if (computer == "paper" && player == "paper") { return "Tie"; }
    else if (computer == "paper" && player == "scissors") { return "Win"; }
    else if (computer == "paper" && player == "rock") { return "Lose"; }
    else if (computer == "rock" && player == "paper") { return "Win"; }
    else if (computer == "rock" && player == "rock") { return "Tie"; }
    else if (computer == "rock" && player == "scissors") { return "Lose"; }
    else if (computer == "scissors" && player == "paper") { return "Lose"; }
    else if (computer == "scissors" && player == "scissors") { return "Tie"; }
    else if (computer == "scissors" && player == "rock") { return "Win"; }
    else { console.log("Error"); }

}

function playRound() {
    Array.from(buttons).forEach(function (e) {
        e.addEventListener('click', gameLogic);

        e.addEventListener('mouseover', function () {
            this.classList.add('mouseOver');
        });

        e.addEventListener('mouseout', function () {
            this.classList.remove('mouseOver');
        });

        e.addEventListener('mousedown', function () {
            this.classList.add('clicked');
        });

        e.addEventListener('mouseup', function () {
            this.classList.remove('clicked');
        });

        e.addEventListener('mouseleave', function () {
            this.classList.remove('clicked');
        });
    });
    return;
}

function restartGame() {
    restart.addEventListener('click', function () {
        computerScore = 0;
        playerScore = 0;
        roundCont = 0;
        round.textContent = "";
        userInput.textContent = "Choose an option";
        gameText.textContent = "";
        scores.textContent = "";
        computerChoiceText.textContent="";
        playerChoiceText.textContent="";
        computerScoreText.textContent="";
        playerScoreText.textContent="";
        whoWon.textContent = "";
    });

    restart.addEventListener('mouseover', function () {
        this.classList.add('mouseOver');
    });

    restart.addEventListener('mouseout', function () {
        this.classList.remove('mouseOver');
    });

    restart.addEventListener('mousedown', function () {
        this.classList.add('clicked');
    });

    restart.addEventListener('mouseup', function () {
        this.classList.remove('clicked');
    });
    
    restart.addEventListener('mouseleave', function () {
        this.classList.remove('clicked');
    });
}


function gameLogic() {

    if (computerScore == 3 || playerScore == 3) {
        if (playerScore > computerScore) {
            round.textContent = "";
            gameText.textContent = "";
            scores.textContent = "";
            computerChoiceText.textContent="";
            playerChoiceText.textContent="";
            computerScoreText.textContent="";
            playerScoreText.textContent="";
            whoWon.textContent = `You won the match!\r\n`;
        }
        else if (playerScore == computerScore) {
            round.textContent = "";
            gameText.textContent = "";
            scores.textContent = "";
            computerChoiceText.textContent="";
            playerChoiceText.textContent="";
            computerScoreText.textContent="";
            playerScoreText.textContent="";
            whoWon.textContent = `Its a tie!\r\n`;
        }
        else if (playerScore < computerScore) {
            round.textContent = "";
            gameText.textContent = "";
            scores.textContent = "";
            computerChoiceText.textContent="";
            playerChoiceText.textContent="";
            computerScoreText.textContent="";
            playerScoreText.textContent="";
            whoWon.textContent = `You lost the match :(\r\n`;
        }
    }
    else {

        let computerChoice = getComputerChoice();
        let playerChoice = this.id;
        let gamestate = gameState(computerChoice, playerChoice);
        roundCont++;
        userInput.textContent = "";
        round.textContent = `Round: ${roundCont} \r\n`;

        gameText.textContent = `The computer chosed: \r\n`;
        gameText.textContent += `You chosed : `;
        computerChoiceText.textContent = computerChoice;
        playerChoiceText.textContent = playerChoice;

        if (gamestate == "Tie") {
            scores.textContent = `The computer score is:\r\n`;
            scores.textContent += `The player score is:`;
            computerScoreText.textContent = computerScore;
            playerScoreText.textContent = playerScore;

            whoWon.textContent = `It\'s a tie!\r\n`;
        }
        else if (gamestate == "Win") {
            playerScore++;
            scores.textContent = `The computer score is:\r\n`;
            scores.textContent += `The player score is:`;
            computerScoreText.textContent = computerScore;
            playerScoreText.textContent = playerScore;

            whoWon.textContent = `You win!" \r\n`;
        }
        else if (gamestate == "Lose") {
            computerScore++;
            scores.textContent = `The computer score is:\r\n`;
            scores.textContent += `The player score is:`;
            computerScoreText.textContent = computerScore;
            playerScoreText.textContent = playerScore;

            whoWon.textContent = `You lose :(\r\n`;
        }
    }
}

function game() {
    round.textContent = "Choose an option";
    playRound();
    restartGame();
}
game();



