const displayComputerChoice = document.querySelector(".computerChoice");
const userChoices = document.querySelectorAll(".icon-button");
const displayUserChoice = document.querySelector(".userChoice");
const resultDisplay = document.querySelector(".result");
const displayGames = document.querySelector(".games");
const displayWon = document.querySelector(".won");
let result;
let choice;
let userChoice;
let games = 0;
let won = 0;

     userChoices.forEach(userchoice => {
        userchoice.addEventListener("click", function(e) {
            if (games < 5){
            displayUserChoice.textContent = e.target.textContent;
            userChoice = e.target.textContent;
            computerChoice();
            game();
            }
            
            if (games === 5){
                displayGames.textContent = games;
                displayWon.textContent = won;
            }
        });
    });

   

function computerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        choice = "rock"
    }
    if (randomNumber === 1){
        choice = "paper"
    }
    if(randomNumber === 2){
        choice = "scissor"
    }
    displayComputerChoice.textContent = choice;
    
}


function game(){
    
    if (choice === userChoice) {
        result = 'its a draw!'
        games++;
      }
      if (choice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        games++;
        won++;
      }
      if (choice === 'rock' && userChoice === "scissor") {
        result = 'you lost!'
        games++;
      }
      if (choice === 'paper' && userChoice === "scissor") {
        result = 'you win!'
        games++;
        won++;
      }
      if (choice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
        games++;
      }
      if (choice === 'scissor' && userChoice === "rock") {
        result = 'you win!'
        games++;
        won++;
      }
      if (choice === 'scissor' && userChoice === "paper") {
        result = 'you lose!'
        games++;
      }
      resultDisplay.textContent = result
}


