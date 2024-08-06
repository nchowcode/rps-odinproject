function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let option = choices[Math.floor(Math.random() * choices.length)];
    return option;
    
}

function getHumanChoice(){
    let humanChoice; 
    const choices = {1: 'rock', 2: 'paper', 3: 'scissors'};
    while (true) {
        humanChoice = window.prompt("Choose an option:\n1: Rock\n2: Paper\n3: Scissors\n");
        humanChoice = parseInt(humanChoice);

        if (choices[humanChoice]){
            return choices[humanChoice];    //  rock/paper/scissor
        }
        else{
            alert("Invalid choice. Please choose a number between 1 and 3.");
        }
    }
} 

function playRound(humanChoice, computerChoice){            

    const winConditions = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper',
    }

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
        return 'tie';
    }

    else{
        if (winConditions[humanChoice] === computerChoice){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`); 
            return 'win';
        }
        else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            return 'loss';
        }
    }
}

function playGame(){
    let score = { user: 0, comp: 0, tie: 0 };
    let comp = getComputerChoice();
    let user = getHumanChoice();
    let result = playRound(user, comp)

    switch (result) {
        case 'win':
            score.user += 1;
            break;
        case 'loss':
            score.comp += 1;
            break;
        case 'tie':
            score.tie += 1;
            break;
        default:
            console.log("Unexpected result:", result);
    }
    console.log(`Score - You: ${score.user}, Computer: ${score.comp}, Ties: ${score.tie}`);
    if (score.user > score.comp) {
        alert('You win the game!');
    } else if (score.user === score.comp){
        alert('It\'s a tie game!');
    } else {
        alert('You lost the game!');
    }
}

// playGame();

