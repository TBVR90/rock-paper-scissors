//ts-worksheet

const display = document.getElementById("display");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const para = document.getElementById("para");
const scoreContainer = document.getElementById("score-container");
const playerScoreCounter = document.getElementById("player-score-counter");
const computerScoreCounter = document.getElementById("computer-score-counter");
const buttonContainer = document.getElementById("btn-container")
const buttons = document.querySelectorAll("button")


let playerScore = 0;
let computerScore = 0;





buttons.forEach(el => el.addEventListener("click", (e) => {
    let computerInput = getComputerInput();
    let playerInput = el.textContent.toLowerCase();
    console.log(computerInput)
    console.log(playerInput)
    playRound(playerInput, computerInput);
    
}))

function getComputerInput() {

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";

        case 2:
            return "scissors";


    };
}

function gameOver(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5){
        para.textContent = (playerScore == 5) ? "Game over, you won!" : "Game over, you lost"
        
        btnPaper.style.visibility = "hidden"
        btnRock.textContent = "Play again"
        btnScissors.textContent = "Quit"
        btnRock.addEventListener("click", newGame, {once: true})
        btnScissors.addEventListener("click", () => window.close())


        
           
        
    }
    
        

    
    
}


function newGame() {
    btnPaper.innerText = "Paper";
    btnScissors.style.visibility = "visible";
    btnRock.style.visibility = "visible";
    para.innerText = "Pick: Rock, Paper or Scissors";
    scoreContainer.style.visibility = "visible"
    playerScore = 0;
    computerScore = 0;
    updateScore()
    

}




btnPaper.innerText = "Start new game"
btnPaper.addEventListener("click", newGame, {once: true})

function updateScore() {
    playerScoreCounter.textContent = playerScore;
    computerScoreCounter.textContent = computerScore;
}

function playRound(playerInput, computerInput) {
      
    
    if (!(playerInput === computerInput)) {
        switch (playerInput) {
            case "rock":
                if (computerInput == "scissors") {
                    playerScore++;
                    para.innerText = "You played ROCK, your opponent played SCISSORS. You WIN!";
                }
                else {
                    computerScore++;
                    para.innerText = "You played ROCK, your opponent played PAPER. You LOSE!";
                }
                break;
            case "paper":
                if (computerInput == "rock") {
                    playerScore++;
                    para.innerText = "You played PAPER, your opponent played ROCK. You WIN!";
                }
                else {
                    computerScore++;
                    para.innerText = "You played PAPER, your opponent played SCISSORS. You LOSE!";
                }
                break;
            case "scissors":
                if (computerInput == "paper") {
                    playerScore++;
                    para.innerText = "You played SCISSORS, your opponent played PAPER. You WIN!";
                }
                else {
                    computerScore++;
                    para.innerText = "You played SCISSORS, your opponent played ROCK. You LOSE!";
                }
                break;
        }


    }
    else {
        para.innerText = "You both picked " + playerInput + ", choose again";

    }
updateScore();
gameOver(playerScore, computerScore);



}
