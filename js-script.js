const display = document.getElementById("display");
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const para = document.getElementById("para");
const scoreContainer = document.getElementById("score-container");
const humanScoreCounter = document.getElementById("human-score-counter");
const computerScoreCounter = document.getElementById("computer-score-counter");

let humanScore = 0;
let computerScore = 0;





btnPaper.innerText = "Start new game"
btnPaper.addEventListener("click", () =>{
    btnPaper.innerText = "Paper";
    btnScissors.style.visibility = "visible";
    btnRock.style.visibility = "visible";
    para.innerText = "";
    scoreContainer.style.visibility = "visible"
   
    
    playRound()}, {once: true})

const updateScore = () => {
    humanScoreCounter.textContent = humanScore;
    computerScoreCounter.textContent = computerScore;
}

const playRound = () => {
    let computerInput = getComputerInput();
    para.innerText = computerInput
    
}

const getComputerInput = () =>{
     
    switch (Math.floor(Math.random()* 3))  {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        
    };
}








