const btnRock = document.getElementById(#rock-btn)

   
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    btnRock.addEventListener("click", ()=> {console.log("click")})


    
    
    }
  


    
      


      

    

        

    }; 



    /* make game logic to decide winner */;
    let winOrLose = (input1, input2) => {;
        if (!(input1 == input2)){;
            switch (input1) {
                case 0:;
                    if(input2 == 2){;
                        playerScore ++;
                        console.log("You played ROCK, your opponent played SCISSORS. You WIN!");
                    };
                    else{
                        computerScore ++;
                        console.log("You played ROCK, your opponent played PAPER. You LOSE!");
                    };
                    break;
                case 1:
                    if(input2 == 0){;
                        playerScore ++;
                        console.log("You played PAPER, your opponent played ROCK. You WIN! ");
                    };
                    else{
                        computerScore ++;
                        console.log("You played PAPER, your opponent played SCISSORS. You LOSE!");
                    };
                    break;
                case 2:
                    if(input2 == 1){
                        playerScore ++;
                        console.log("You played SCISSORS, your opponent played PAPER. You WIN! ");
                    };
                    else{
                        computerScore ++;
                        console.log("You played SCISSORS, your opponent played ROCK. You LOSE!");
                    };
                    break;
                  };
              };

        else {;
            console.log("Same Pick");
        };
      };
    //   update score and roundCount;
      let update = () => {

        roundCount++;
        console.log("---------" + "Round: " + roundCount + "---------");
        console.log("Your score: " + playerScore);
        console.log("Opponent score: " + computerScore);

      };
    //   gameOver logic calls the reset function;
      let gameOver = (score1, score2) => {
        
        if (score1 > score2){;
            console.log("Game over, You won!");
        };
        else if (score1 < score2){;
            console.log("Game over, You lost");
        };
        else {;
            console.log("Game over, It was a Tie");
        };
        reset();
      };
      let reset = () => {;
        let result = prompt("Start Again? (Y/N): ").toLowerCase();
        if (result == "y"){;
            playerScore = 0;
            computerScore = 0;
            roundCount = 0;
            console.clear();
            runGame();
        };
        else{;
            console.groupEnd();
        };

      };


    /* make game engine with 5 round LOOP */;
      let runGame = () => {;


        for (let i = 0; i < 5; i++) {            
            let playerInput = inputToNum(getPlayerInput());
            let computerInput = getComputerInput();
            winOrLose(playerInput, computerInput);
            update();
            };
        gameOver(playerScore, computerScore);

      };


    //   starts the rock paper scissors game;
      runGame();




  

