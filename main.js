const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");
const scoreboard = document.createElement('div');

rock.classList.add("rock");
paper.classList.add("paper");
scissor.classList.add("scissors");
scoreboard.classList.add("score");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissors";
scoreboard.textContent = "Score: "

const section = document.querySelector("section");

section.appendChild(rock);
section.appendChild(paper);
section.appendChild(scissor);
section.appendChild(scoreboard);

const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let option = choices[Math.floor(Math.random() * choices.length)];
    return option;
    
}

function getHumanChoice(choice){
    return choice;
} 

function playRound(humanChoice, computerChoice){            

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    }

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
        ties++;
    }

    else{
        if (winConditions[humanChoice] === computerChoice){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`); 
            playerScore++;
        }
        else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.getAttribute("class"), getComputerChoice());
        scoreboard.textContent = playerScore;
        
        if(playerScore === 5){
            alert("You Won!");
            playerScore = 0;
        }
    })
});



// playGame();

