//ts-worksheet

const display = document.getElementById("display");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const para = document.getElementById("para");
const scoreContainer = document.getElementById("score-container");
const humanScoreCounter = document.getElementById("human-score-counter");
const computerScoreCounter = document.getElementById("computer-score-counter");
const buttonContainer = document.getElementById("btn-container")
const buttons = document.querySelectorAll("button")


let humanScore = 0;
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






btnPaper.innerText = "Start new game"
btnPaper.addEventListener("click", () =>{
    btnPaper.innerText = "Paper";
    btnScissors.style.visibility = "visible";
    btnRock.style.visibility = "visible";
    para.innerText = "Pick: Rock, Paper or Scissors";
    scoreContainer.style.visibility = "visible"
   
    
    }, {once: true})

const updateScore = () => {
    humanScoreCounter.textContent = humanScore;
    computerScoreCounter.textContent = computerScore;
}

const playRound = (playerInput, computerInput) => {

    while (humanScore > 5 || computerScore > 5 ) {
        console.log("WOW")
        if (!(playerInput === computerInput)){
            switch (playerInput) {
                case "rock":
                    if(computerInput == "scissors"){
                        playerScore ++;
                        para.innerText = "You played ROCK, your opponent played SCISSORS. You WIN!";
                    }
                    else{
                        computerScore ++;
                        para.innerText = "You played ROCK, your opponent played PAPER. You LOSE!";
                    }
                    break
                case "paper":
                    if(computerInput == "rock"){
                        playerScore ++;
                        para.innerText = "You played PAPER, your opponent played ROCK. You WIN!";
                    }
                    else{
                        computerScore ++;
                        para.innerText = "You played PAPER, your opponent played SCISSORS. You LOSE!";
                    }
                    break
                case "scissors":
                    if(computerInput == "paper"){
                        playerScore ++;
                        para.innerText = "You played SCISSORS, your opponent played PAPER. You WIN!";
                    }
                    else{
                        computerScore ++;
                        para.innerText = "You played SCISSORS, your opponent played ROCK. You LOSE!";
                    }
                    break
         }
            
        
        }
        else{
            para.innerText = "You both picked " + playerInput + " choose again"

        }



}}
